import React from "react";
import main from "../assets/favicon.png";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/main";
import data from "../data.json";

const MainView = (props) => {
  let tip = data.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "Cloudy";
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>D3fau1t's paper</Text>
      <Text style={styles.weather}>
        오늘의 날씨: {todayWeather + "°C " + todayCondition}{" "}
      </Text>
      <Image style={styles.mainImage} source={main} />
      <ScrollView
        style={styles.middleContainer}
        horizontal
        indicatorStyle={"white"}
      >
        <TouchableOpacity style={styles.middleButton01}>
          <Text style={styles.middleButtonText}>Lifestyle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}>
          <Text style={styles.middleButtonText}>Economy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03}>
          <Text style={styles.middleButtonText}>Animals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04}>
          <Text style={styles.middleButtonText}>Tips</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomContainer}>
        {tip.map((content, i) => {
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
    </ScrollView>
  );
};
export default MainView;
