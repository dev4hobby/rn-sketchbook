import React from 'react';
import main from '../styles/common';
import { View, Text, StatusBar } from 'react-native';

const ToManyText = () => {
  return (
    <View style={main.container}>
      <Text>Hello, Text 1</Text>
      <Text>Hello, Text 2</Text>
      <Text>Hello, Text 3</Text>
      <Text>Hello, Text 4</Text>
      <Text>Hello, Text 5</Text>
      <Text>Hello, Text 6</Text>
      <Text>Hello, Text 7</Text>
      <Text>Hello, Text 8</Text>
      <Text>Hello, Text 9</Text>
      <Text>Hello, Text 10</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default ToManyText;