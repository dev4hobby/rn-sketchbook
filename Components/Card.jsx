import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import styles from "../styles/card";
import {
  setTestDeviceIDAsync,
  AdMobBannerr,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob'

export default function Card({ content, navigation, userId }) {
  useEffect(() => {
    Platform.OS === 'ios' ? AdMobInterstitial.setAdUnitID('ca-app-pub-2581025575366071/3642236732') : AdMobInterstitial.setAdUnitID('ca-app-pub-2581025575366071/6843115142')
    AdMobInterstitial.addEventListener("interstitialDidLoad", () =>
          console.log("interstitialDidLoad")
        );
        AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>
          console.log("interstitialDidFailToLoad")
        );
        AdMobInterstitial.addEventListener("interstitialDidOpen", () =>
          console.log("interstitialDidOpen")
        );
        AdMobInterstitial.addEventListener("interstitialDidClose", () => {
          console.log("interstitialDidClose")
          navigation.navigate('DetailPage',{idx:content.idx})
        });
  }, [])

  const goDetail = async () => {
    // await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    // await AdMobInterstitial.showAdAsync();
    await navigation.navigate('DetailPage',{idx:content.idx})
  }
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={goDetail}
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
