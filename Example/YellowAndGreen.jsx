import React from 'react';
import main from '../styles/common';
import { View } from 'react-native';

const YellowAndGreen = () => {
  return (
    <View style={main.container}>
      <View style={main.subContainerTwo}></View>
      <View style={main.subContainerOne}></View>
    </View>
  )
}

export default YellowAndGreen;