import React from "react";
import main from "../styles/common";
import { View, Text } from "react-native";

const ToManyTextWithSpace = () => {
  return (
    <View style={main.container}>
      <View style={main.textContainer}>
        <Text style={main.textStyle}>Hello there</Text>
      </View>
      <View style={main.textContainer}>
        <Text style={main.textStyle}>Hello there</Text>
      </View>
      <View style={main.textContainer}>
        <Text style={main.textStyle}>Hello there</Text>
      </View>
      <View style={main.textContainer}>
        <Text style={main.textStyle}>Hello there</Text>
      </View>
      <View style={main.textContainer}>
        <Text style={main.textStyle}>Hello there</Text>
      </View>
      <View style={main.textContainer}>
        <Text style={main.textStyle}>Hello there</Text>
      </View>
      <View style={main.textContainer}>
        <Text style={main.textStyle}>Hello there</Text>
      </View>
    </View>
  );
};

export default ToManyTextWithSpace