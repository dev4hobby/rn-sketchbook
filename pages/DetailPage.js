import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Share,
} from "react-native";
import * as Linking from 'expo-linking';
import styles from "../styles/detail";

export default function DetailPage({ navigation, route }) {
  const [tip, setTip] = useState({
    idx: 0,
    category: "Lifestyle",
    title:
      "Amazon Japan에서 Vinyl 상품정보를 Python으로 크롤링해서 DB에 넣어볼까?",
    image:
      "https://media.vlpt.us/images/d3fau1t/post/1a594c00-7621-48fb-b77d-b378e4f6a645/image.png?w=768",
    desc: "평소 LP를 수집하는 취미가 있는데 중고로 구매하는 경우도 있지만 보통은 Amazon에서 둘러보다가 괜찮은 것이 있으면 구매하는편이다. 매번 찾아보기 귀찮기도 해서 하루에 한번씩 확인하여, 원하는 아티스트의 LP가 올라오면 DB에 기록하고 알림을 날리기로 했다.",
    date: "2021.10.04",
  });

  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerStyle: {
        backgroundColor: "#000",
        shadowColor: "#000",
      },
      headerTintColor: "#fff",
    });
    setTip(route.params);
  }, []);
  const popup = () => {
    Alert.alert("Popup!");
  };
  const share = () => {
    Share.share({
      message: `${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
    })
  }
  const link = () => {
    Linking.openURL(`${tip.link}`)
  }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: tip.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{tip.title}</Text>
        <Text style={styles.desc}>{tip.desc}</Text>
        <TouchableOpacity style={styles.button} onPress={() => popup()}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => share()}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => link()}>
          <Text style={styles.buttonText}>Check it out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
