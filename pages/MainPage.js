import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import styles from "../styles/main";
import Loading from "../Components/Loading";
import Card from "../Components/Card";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import axios from "axios";
import { db } from "../firebase/database";
import { ref, onValue } from "firebase/database";
import { androidId, getIosIdForVendorAsync } from "expo-application";
import {
  setTestDeviceIDAsync,
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from "expo-ads-admob";

export default function MainPage({ navigation, route }) {
  const [state, setState] = useState([]);
  const [categoryState, setCategoryState] = useState([]);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState("web");
  const [weather, setWeather] = useState({
    temp: 0,
    condition: "",
  });
  const isIOS = Platform.OS === "ios";
  const checkUserId = async () => {
    return isIOS ? await getIosIdForVendorAsync() : androidId ?? "web";
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        title: `D3fau1t's paper`,
      });
      const tipRef = ref(db, "tip/");
      onValue(tipRef, (snapshot) => {
        const tip = snapshot.val();
        setState(tip);
        setCategoryState(tip);
        getLocation();
        setReady(true);
        checkUserId()
          .then((user_id) => {
            setUserId(user_id);
          })
          .catch((err) => console.log);
      });
    }, 100);
  }, []);

  const getLocation = async () => {
    await Location.requestForegroundPermissionsAsync();
    const location = await Location.getCurrentPositionAsync({});
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    const API_KEY = `f15d5ae384d657a9cd22b1c24d8420fb`;
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      )
      .then((res) => {
        setWeather({
          temp: res.data.main.temp,
          condition: res.data.weather[0].main,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const categoryFilter = (c) => {
    if (c == "All") {
      setCategoryState(state);
    } else {
      setCategoryState(
        state.filter((d) => {
          return d.category == c;
        })
      );
    }
  };

  return !ready ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.weather}>
        Weather: {weather.temp + "°C " + weather.condition}{" "}
      </Text>
      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => {
          navigation.navigate("AboutPage");
        }}
      >
        <Text style={styles.aboutButtonText}>About me</Text>
      </TouchableOpacity>
      <Image
        style={styles.mainImage}
        source={require("../assets/keepCalm.jpeg")}
      />
      <ScrollView
        style={styles.middleContainer}
        horizontal
        indicatorStyle={"white"}
      >
        <TouchableOpacity
          style={styles.middleButtonAll}
          onPress={() => {
            categoryFilter("All");
          }}
        >
          <Text style={styles.middleButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton01}
          onPress={() => {
            categoryFilter("Lifestyle");
          }}
        >
          <Text style={styles.middleButtonText}>Life</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton02}
          onPress={() => {
            categoryFilter("Tech");
          }}
        >
          <Text style={styles.middleButtonText}>Tech</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton03}
          onPress={() => {
            navigation.navigate("LikePage", {
              userId: userId,
            });
          }}
        >
          <Text style={styles.middleButtonText}>Favorite</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {categoryState.map((content, i) => {
          return <Card content={content} key={i} navigation={navigation} />;
        })}
        {isIOS ? (
          <AdMobBanner
            bannerSize="fullBanner"
            servePersonalizedAds={true}
            adUnitID="ca-app-pub-2581025575366071/8993145075"
            style={styles.banner}
          />
        ) : (
          <AdMobBanner
            bannerSize="fullBanner"
            servePersonalizedAds={true}
            adUnitID="ca-app-pub-2581025575366071/1486846683"
            style={styles.banner}
          />
        )}
      </View>
    </ScrollView>
  );
}
