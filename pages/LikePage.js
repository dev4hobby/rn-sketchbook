import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import LikeCard from "../Components/LikeCard";
import styles from "../styles/like";
import { onValue, ref } from "@firebase/database";
import { db } from "../firebase/database";

export default function LikePage({ navigation, route, userId }) {
  const [tip, setTip] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: "Favorite",
    });
    const favoritePost = ref(db, `like/${userId}`);
    onValue(favoritePost, (snapshot) => {
      const favorites = snapshot.val();
      if (favorites) {
        setTip(favorites);
      }
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {tip.map((content, i) => {
        return <LikeCard key={i} content={content} navigation={navigation} userId={userId}/>;
      })}
    </ScrollView>
  );
}
