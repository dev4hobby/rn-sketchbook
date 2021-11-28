import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "../styles/likeCard";
import { db } from "../firebase/database"
import { ref, remove } from "firebase/database"

export default function LikeCard({ content, navigation, userId }) {
  const detail = () => {
    navigation.navigate("DetailPage", { idx: content.idx });
  };
  const dislike = () => {
    const likedPost = ref(db, `like/${userId}/${content.idx}`)
    remove(likedPost).then(() => {
      Alert.alert("삭제 완료");
      navigation.navigate('LikePage')
    })
  };
  return (
    <TouchableOpacity onPress={detail}>
      <View style={styles.card} onPress={detail}>
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
      <View>
          <TouchableOpacity style={styles.button} onPress={dislike}><Text style={styles.buttonText}>Dislike</Text></TouchableOpacity>
      </View>
    </TouchableOpacity>
    
  );
}


{/* <TouchableOpacity style={styles.button} onPress={detail}><Text style={styles.buttonText}>View</Text></TouchableOpacity> */}