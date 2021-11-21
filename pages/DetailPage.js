import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from '../styles/about'


export default function AboutPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello My name is d3fau1t
      </Text>
      <View style={styles.textContainer}>
        <Image
          style={styles.aboutImage}
          source={{ uri: aboutImage }}
          resizeMode={"cover"}
        />
        <Text style={styles.desc01}>
          
        </Text>
        <Text style={styles.desc02}>
          Back-end developer
        </Text>
        <Text style={styles.desc02}>
          I Luv to experience different technologies.
        </Text>
        <TouchableOpacity style={styles.button} onPress={goToGitHub}>
          <Text style={styles.buttonText}>Check it out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
