import { View, Text } from 'react-native'
import React from 'react'
import ShamNavigator from '../components/ShamNavigator'

const NewsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ShamNavigator  title="News"/>
      <Text>News</Text>
    </View>
  )
}

export default NewsScreen