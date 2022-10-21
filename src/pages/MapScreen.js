import { View, Text } from 'react-native'
import React from 'react'
import ShamNavigator from '../components/ShamNavigator'

const MapScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ShamNavigator  title="Map"/>
      <Text>Map</Text>
    </View>
  )
}

export default MapScreen