import { View, Text } from 'react-native'
import React from 'react'
import ShamNavigator from '../components/ShamNavigator'

const QueryScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ShamNavigator  title="Query"/>
      <Text>Query</Text>
    </View>
  )
}

export default QueryScreen