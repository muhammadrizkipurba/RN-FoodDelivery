import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Modal, TouchableWithoutFeedback, Easing, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { IconButton, TextButton, TextIconButton, TwoPointSlider } from '../../../components';
import { COLORS, icons, SIZES, utils } from '../../../constants'

const FilterSection = ({ containerStyle, title, children }) => {
  return (
    <View style={{ marginTop: SIZES.padding, ...containerStyle }}>
      <Text style={{fontSize: 14, fontWeight: '600'}}>{title}</Text>
      {children}
    </View>
  );
};

const FilterModal = ({ isVisible, onClose }) => {

  const [showFilterModal, setShowFilterModal] = useState(isVisible);

  const [deliveryTime, setDeliveryTime] = useState('');
  const [rating, setRating] = useState('');
  const [tag, setTag] = useState('');

  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if(showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false
      }).start(() => onClose());
    };
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680]
  });

  const renderDistanceSection = () => {
    return (
      <FilterSection
        title="Distance"
      >
        <View
          style={{
            alignItems: 'center',
            marginHorizontal: 20
          }}
        >
          <TwoPointSlider
            value={[0, 20]}
            min={1}
            max={20}
            step={1}
            postfix="km"
            onChange={(value) => console.log(value)}
          />
        </View>
      </FilterSection>
    )
  };

  const renderPricingRangeSection = () => {
    return (
      <FilterSection
        title="Pricing range"
      >
        <View
          style={{
            alignItems: 'center',
            marginHorizontal: 20
          }}
        >
          <TwoPointSlider
            value={[0, 100000]}
            min={0}
            max={100000}
            step={10000}
            prefix="IDR"
            onChange={(value) => console.log(value)}
          />
        </View>
      </FilterSection>
    )
  };

  const renderDeliveryTimeSection = () => {
    return (
      <FilterSection
        title='Delivery time'
        containerStyle={{
          marginTop: 40
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10,
          }}
        >
          {utils.delivery_time.map((item, idx) => {
            return (
              <TextButton 
                key={`delivery_time-${idx}`}
                label={item.label}
                labelStyle={{
                  color: item.id === deliveryTime ? COLORS.white : COLORS.darkgray,
                  fontWeight: '600',
                  fontSize: 14
                }}
                buttonContainerStyle={{
                  width: '30%',
                  height: 40,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: item.id === deliveryTime ? COLORS.primary : COLORS.highlight
                }}
                onPress={() => setDeliveryTime(item.id)}
              />
            )
          })}
        </View>
      </FilterSection>
    )
  };

  const renderTagSection = () => {
    return (
      <FilterSection
        title='Tags'
        containerStyle={{
          marginTop: 20
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10,
          }}
        >
          {utils.tags.map((item, idx) => {
            return (
              <TextButton 
                key={`tag-${idx}`}
                label={item.label}
                labelStyle={{
                  color: item.id === tag ? COLORS.white : COLORS.darkgray,
                  fontWeight: '600',
                  fontSize: 14
                }}
                buttonContainerStyle={{
                  height: 40,
                  paddingHorizontal: 20,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: item.id === tag ? COLORS.primary : COLORS.highlight
                }}
                onPress={() => setTag(item.id)}
              />
            )
          })}
        </View>
      </FilterSection>
    )
  };

  const renderRatingSection = () => {
    return (
      <FilterSection
        title='Ratings'
        containerStyle={{
          marginTop: 40
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10
          }}
        >
          {utils.ratings.map((item, idx) => {
            return (
              <TextIconButton 
                key={`ratings-${idx}`}
                containerStyle={{
                  flex: 1,
                  height: 40,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: item.id === rating ? COLORS.primary : COLORS.highlight,
                }}
                label={item.label}
                labelStyle={{
                  color: item.id === rating ? COLORS.white : COLORS.darkgray,
                  fontWeight: '600',
                  fontSize: 15
                }}
                icon={icons.star}
                iconStyle={{
                  tintColor: item.id === rating ? COLORS.white : COLORS.darkgray
                }}
                onPress={() => setRating(item.id)}
              />
            )
          })}
        </View>
      </FilterSection>
    )
  };

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isVisible}
      onRequestClose={() => setShowFilterModal(false)}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack2
        }}
      >
        {/* TRANSPARENT BACKGROUND */}
        <TouchableWithoutFeedback
          onPress={() => setShowFilterModal(false)}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            }}
          >
          </View>
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: '100%',
            paddingHorizontal: 20,
            paddingVertical: 30,
            borderTopLeftRadius: SIZES.radius,
            borderTopRightRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}
        >
          {/* HEADER */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 15
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontWeight: '600'
              }}
            >
              Filter your search
            </Text>
            <IconButton 
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                padding: 6,
                borderColor: COLORS.lightGray4
              }}
              icon={icons.cross}
              iconStyle={{
                tintColor: COLORS.lightGray4
              }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>

          {/* FILTER CONTENT */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250
            }}
          >
            {/* DISTANCE SECTION */}
            {renderDistanceSection()}

            {/* DELIVERY TIME SECTION */}
            {renderDeliveryTimeSection()}

            {/* PRICING RANGE SECTION */}
            {renderPricingRangeSection()}

            {/* RATINGS SECTION */}
            {renderRatingSection()}

            {/* TAGS SECTION */}
            {renderTagSection()}
          </ScrollView>

          {/* APPLY BUTTON */}
          <View 
            style={{
              position: 'absolute',
              bottom: 150,
              left: 0,
              right: 0,
              height: 110,
              paddingHorizontal: 25,
              paddingVertical: 15,
              backgroundColor: COLORS.white
            }}
          >
            <TextButton 
              label='Apply filter'
              buttonContainerStyle={{
                height: 50,
                borderRadius: 10,
                backgroundColor: COLORS.primary
              }}
              onPress={() => console.log('ApplyFilter')}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  )
}

export default FilterModal
