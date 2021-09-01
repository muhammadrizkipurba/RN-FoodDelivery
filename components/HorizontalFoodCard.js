import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, functions, icons } from '../constants'

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: COLORS.highlight,
        ...containerStyle
      }}
      onPress={onPress}
    >
      <Image
        source={item.image}
        style={imageStyle}
        resizeMode='contain'
      />

      <View
        style={{
          flex: 1,
          marginLeft: 20,
        }}
      >
        <Text style={{fontSize: 15, fontWeight: '700', marginBottom: 5}}>
          {item.name}
        </Text>
        <Text style={{fontSize: 12, color: COLORS.darkgray, fontWeight: '500'}}>
          {item.description}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 7}}>
          <Image 
            source={icons.star}
            style={{
              height: 12,
              width: 12,
              marginRight: 5
            }}
          />
          <Text style={{fontSize: 12, fontWeight: '600', color: COLORS.darkgray}}>{item.rating} / 5.0</Text>
        </View>
        <Text style={{fontSize: 15, fontWeight: '700', marginTop: 15}}>
          IDR {functions.parseRupiahFormat(item.price)}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default HorizontalFoodCard