import React from "react";
import { View, Image } from "react-native";
import favicon from "../assets/favicon.png";
import main from "../styles/common"

const WithImage = () => {
  return (
    <View style={main.container}>
      <Image
        source={favicon}
        resizeMode={"repeat"}
        style={main.imageStyle}
      />
    </View>
  );
};

export default WithImage;
