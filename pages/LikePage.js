import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import LikeCard from "../Components/LikeCard";
import Card from "../Components/Card";
import styles from "../styles/like"

export default function LikePage({ navigation, route }) {
  const [tip, setTip] = useState([
    {
      "idx": 6,
      "category": "Tech",
      "title": "Flask에서 MongoDB를 어떻게 사용하면 좋을지 고민해보았습니다.",
      "image": "https://media.vlpt.us/images/d3fau1t/post/73d9c980-2247-44c5-903b-8854a2c08690/flask_mongodb.png",
      "link": "https://velog.io/@d3fau1t/Flask%EC%97%90%EC%84%9C-MongoDB%EB%A5%BC-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4-%EC%A2%8B%EC%9D%84%EC%A7%80-%EA%B3%A0%EB%AF%BC%ED%95%B4%EB%B3%B4%EC%95%98%EC%8A%B5%EB%8B%88%EB%8B%A4",
      "desc": "Flask를 사용하면서 프로젝트 디렉터리를 구성하고 데이터베이스 코드는 어떻게 관리해야 코드가 좀 더 보기 좋을까 라는 의구심이 들면서 이 주제가 시작되었다.",
      "date": "2021.11.01"
    },
  ]);

  useEffect(() => {
    navigation.setOptions({
      title: "Favorite",
    });
  });

  return (
    <ScrollView style={styles.container}>
      {tip.map((content, i) => {
        return <LikeCard key={i} content={content} navigation={navigation} />;
      })}
    </ScrollView>
  );
}
