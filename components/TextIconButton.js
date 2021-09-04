import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

const TextIconButton = ({ containerStyle, label, labelStyle, icon, iconStyle, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle
      }}
    >
      <Text style={{...labelStyle}}>{label}</Text>
      <Image 
        source={icon}
        style={{
          height: 12,
          width: 12,
          marginLeft: 5,
          ...iconStyle
        }}
      />
    </TouchableOpacity>
  )
}

export default TextIconButton
