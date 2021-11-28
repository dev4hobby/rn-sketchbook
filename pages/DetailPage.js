import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Share,
  Platform,
} from "react-native";
import * as Linking from "expo-linking";
import styles from "../styles/detail";
import { db } from "../firebase/database";
import { set, ref, onValue } from "firebase/database";
import { androidId, getIosIdForVendorAsync }  from "expo-application";
import {localStorage} from "expo-secure-store"

export default function DetailPage({ navigation, route }) {
  const isIOS = Platform.OS === "ios";
  const [tip, setTip] = useState({});

  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerStyle: {
        backgroundColor: "#000",
        shadowColor: "#000",
      },
      headerTintColor: "#fff",
    });
    const { idx } = route.params;
    const tipRef = ref(db, `tip/${idx}`);
    onValue(tipRef, (snapshot) => {
      setTip(snapshot.val());
    });
  }, []);

  const like = async () => {
    const user_id = isIOS ? await getIosIdForVendorAsync() : androidId ?? 'web';
    set(ref(db, `like/${user_id}/${tip.idx}`),
    tip,
    (error) => {
      console.log(error)
      Alert.alert('Please try later')
    })
  }
  const share = () => {
    Share.share({
      message: `${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
    });
  };
  const link = () => {
    Linking.openURL(`${tip.link}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: tip.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{tip.title}</Text>
        <Text style={styles.desc}>{tip.desc}</Text>
        <TouchableOpacity style={styles.button} onPress={() => like()}>
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
