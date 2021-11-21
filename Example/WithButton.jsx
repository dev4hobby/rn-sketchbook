import React from "react";
import { Text, View, Button, Alert } from "react-native";
import main from '../styles/common'

const WithButton = () => {
  return (
    <View style={main.container}>
      <View style={main.textContainer}>
        <Text style={main.textStyle}>Hello</Text>
        <Button
          style={main.buttonStyle}
          title="Button One"
          color="#f194ff"
          onPress={() => {
            Alert.alert("Alert 1");
          }}
        />
        <Button
          style={main.buttonStyle}
          title="Button Two"
          color="#FF0000"
          onPress={() => {
            Alert.alert("Alert 2");
          }}
        />
      </View>
    </View>
  );
};

export default WithButton;