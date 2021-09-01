import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, functions, icons } from '../constants';

const VerticalFoodCard = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: COLORS.highlight,
        ...containerStyle
      }}
    >
      {/* Rating & Favourite */}
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{flexDirection: 'row', flex: 1}}>
          <Image 
            source={icons.star}
            style={{
              height: 12,
              width: 12,
            }}
          />
          <Text style={{fontSize: 12, fontWeight: '600', color: COLORS.darkgray}}>{item.rating} / 5.0</Text>
        </View>
        <Image
          source={icons.favourite}
          style={{
            width: 18,
            height: 18,
            marginRight: 7,
            tintColor: item.isFavourite ? COLORS.red : COLORS.lightGray2
          }}
        />
      </View>

      {/* Menu Image */}
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image 
          source={item.image}
          style={{
            height: '75%',
            width: '75%',
          }}
          resizeMode='contain'
        />
      </View>

      {/* INFO */}
      <View
        style={{
          alignItems: 'center',
          marginTop: -10,
        }}
      >
        <Text style={{fontSize: 15, fontWeight: '700', marginBottom: 5}}>{item.name}</Text>
        <Text style={{fontSize: 12, color: COLORS.darkgray, textAlign: 'center', fontWeight: '500'}}>
          {item.description}
        </Text>
        <Text style={{fontSize: 15, fontWeight: '700', marginTop: 15}}>
          IDR {functions.parseRupiahFormat(item.price)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
