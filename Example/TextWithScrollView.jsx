import React from "react";
import main from "../styles/common";
import { View, Text, ScrollView } from "react-native";

const TextWithScrollView = () => {
  return (
    <View style={main.container}>
      <ScrollView style={main.container}>
        <View style={main.textContainer}>
          <Text style={main.textStyle}>
            Howdy
          </Text>
        </View>
        <View style={main.textContainer}>
          <Text style={main.textStyle}>
            Howdy
          </Text>
        </View>
        <View style={main.textContainer}>
          <Text style={main.textStyle}>
            Howdy
          </Text>
        </View>
        <View style={main.textContainer}>
          <Text style={main.textStyle}>
            Howdy
          </Text>
        </View>
        <View style={main.textContainer}>
          <Text style={main.textStyle}>
            Howdy
          </Text>
        </View>
        <View style={main.textContainer}>
          <Text style={main.textStyle}>
            Howdy
          </Text>
        </View>
        <View style={main.textContainer}>
          <Text style={main.textStyle}>
            Howdy
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TextWithScrollView