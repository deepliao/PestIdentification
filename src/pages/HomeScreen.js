import {View, Text} from 'react-native';
import React from 'react';
import ShamNavigator from '../components/ShamNavigator'

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ShamNavigator  title="Home"/>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
