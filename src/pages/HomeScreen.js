import {View, Text} from 'react-native';
import React from 'react';
import ShamNavigator from '../components/ShamNavigator'
import Swipper from '../components/Swiper/index'

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ShamNavigator  title="Home"/>
      <Swipper/>
    </View>
  );
};

export default HomeScreen;
