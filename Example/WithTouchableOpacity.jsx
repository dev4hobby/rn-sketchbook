import React from "react";
import { Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import main from "../styles/common";

const customAlert = () => {
  Alert.alert("onPress on TouchableOpacity");
};

const WithTouchableOpacity = () => {
  return (
    <ScrollView style={main.container}>
      <TouchableOpacity style={main.textContainer} onPress={customAlert}>
        <Text style={main.textStyle}>Howdy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={main.textContainer} onPress={customAlert}>
        <Text style={main.textStyle}>Howdy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={main.textContainer} onPress={customAlert}>
        <Text style={main.textStyle}>Howdy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={main.textContainer} onPress={customAlert}>
        <Text style={main.textStyle}>Howdy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={main.textContainer} onPress={customAlert}>
        <Text style={main.textStyle}>Howdy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={main.textContainer} onPress={customAlert}>
        <Text style={main.textStyle}>Howdy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={main.textContainer} onPress={customAlert}>
        <Text style={main.textStyle}>Howdy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default WithTouchableOpacity;
