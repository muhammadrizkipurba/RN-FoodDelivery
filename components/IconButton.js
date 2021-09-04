import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS } from '../constants'

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle
      }}
      onPress={onPress}
    >
      <Image 
        source={icon}
        style={{
          width: 10,
          height: 10,
          tintColor: COLORS.white,
          ...iconStyle
        }}
      />
    </TouchableOpacity>
  )
}

export default IconButton
