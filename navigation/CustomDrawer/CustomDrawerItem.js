import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS } from '../../constants';

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.padding,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : 'transparent'
      }}
      onPress={onPress}
    >
      <Image 
        source={icon}
        style={{
          height: 18,
          width: 18,
          tintColor: COLORS.white
        }}
        resizeMode='contain'
      />
      <Text style={{marginLeft: 15, fontWeight: '600', color: COLORS.white, ...FONTS.h2}}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomDrawerItem
