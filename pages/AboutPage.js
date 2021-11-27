import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/about";
import { StatusBar } from "expo-status-bar";
import * as Linking from 'expo-linking';


const goToGitHub = () => {
  Linking.openURL(`https://github.com/aciddust`)
};

export default function AboutPage({ navigation, route }) {
  const aboutImage =
  "https://avatars.githubusercontent.com/u/18468557?s=400&u=0ecb3886b3f750eeb3c6588e6b09d576286ca41c&v=4";
  useEffect(() => {
    navigation.setOptions({
      title:"About",
      headerStyle: {
        backgroundColor: "#1f266a",
        shadowColor: "#1f266a",
      },
      headerTintColor: "#fff",
    })
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Hello My name is d3fau1t</Text>
      <View style={styles.textContainer}>
        <Image
          style={styles.aboutImage}
          source={{ uri: aboutImage }}
          resizeMode={"cover"}
        />
        <Text style={styles.desc01}></Text>
        <Text style={styles.desc02}>Back-end developer</Text>
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
