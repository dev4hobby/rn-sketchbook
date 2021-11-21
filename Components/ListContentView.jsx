import React from "react";
import { Text, Image, View } from "react-native";
import styles from "../styles/main";

const ListContentView = ({ item }) => {
  return (
    <View style={styles.bottomContainer}>
      {item.map((content, i) => {
        return (
          <View style={styles.card} key={i}>
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
          </View>
        );
      })}
    </View>
  );
};

export default ListContentView