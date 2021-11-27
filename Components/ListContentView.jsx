import React from "react";
import { View } from "react-native";
import styles from "../styles/main";
import Card from "./Card";

const ListContentView = ({ item }) => {
  
  return <View style={styles.bottomContainer} >;
  {item.map((content, i) => {
    return (
      <Card content={content} key={i} />
    );
  })}
  </View>
};

export default ListContentView