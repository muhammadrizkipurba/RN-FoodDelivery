import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { COLORS, functions, SIZES } from '../constants';

const TwoPointSlider = ({ value, min, max, step, prefix, postfix, onChange }) => {
  return (
    <MultiSlider
      values={value}
      sliderLength={SIZES.width - (SIZES.padding*6) - 15}
      min={min}
      max={max}
      step={step}
      markerOffsetY={16}
      selectedStyle={{
        backgroundColor: COLORS.primary
      }}
      trackStyle={{
        height: 8,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2
      }}
      minMarkerOverlapDistance={50}
      onValuesChange={(value) => onChange(value)}
      customMarker={(e) => {
        return (
          <View
            style={{
              height: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 15,
                borderWidth: 3,
                marginBottom: 10,
                borderColor: COLORS.highlight,
                backgroundColor: COLORS.primary,
                ...styles.shadow
              }}
            />
            <Text 
              numberOfLines={1}
              style={{
                width: '100%',
                fontSize: 12, 
                fontWeight: '500', 
                color: COLORS.darkgray
              }}
            >
              {prefix} {prefix === 'IDR' ? functions.parseRupiahFormat(e.currentValue) :  e.currentValue} {postfix}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  }
})

export default TwoPointSlider;