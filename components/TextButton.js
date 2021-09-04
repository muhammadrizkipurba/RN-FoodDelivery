import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants'

const TextButton = ({ label, labelStyle, buttonContainerStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: 14,
          fontWeight: '500',
          ...labelStyle
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TextButton
