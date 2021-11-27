import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/card";

export default function Card({ content, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate("DetailPage", content);
      }}
    >
      <Image style={styles.cardImage} source={{ uri: content.image }} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {content.title}
        </Text>
        <Text style={styles.cardDesc} numberOfLines={3}>
          {content.desc}
        </Text>
        <Text style={styles.cardDate}>{content.date}</Text>
      </View>
    </TouchableOpacity>
  );
}
