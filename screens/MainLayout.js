import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { COLORS } from '../constants'

const MainLayout = ({ drawerAnimationStyle }) => {
  return (
    <Animated.View 
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        ...drawerAnimationStyle
      }}
    >
      <Text>Main Layout</Text>
    </Animated.View>
  )
}

export default MainLayout