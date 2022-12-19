import { Text, View } from 'react-native'
import React, { Component } from 'react'
import ShamNavigator from '../components/ShamNavigator'

export class PhotoScreen extends Component {
  render() {
    return (
      <View>
        <ShamNavigator  title="Map"/>
        <Text>PhotoScreen</Text>
      </View>
    )
  }
}

export default PhotoScreen