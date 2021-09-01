import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Favourite = () => {
  return (
    <View style={styles.container}>
      <Text>Favourite</Text>
    </View>
  )
}

export default Favourite

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
