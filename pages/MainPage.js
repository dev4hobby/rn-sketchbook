import React from "react";
import main from "../assets/favicon.png";
import { Text, Image, ScrollView } from "react-native";
import styles from "../styles/main";
import data from "../data.json";
import WideScrollMenu from "../Components/WideScrollMenu";
import ListContentView from "../Components/ListContentView";

const mainImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBCaogsXpIE7Wc0aifejwKo2rQnqGxlHQnA&usqp=CAU'
export default function MainPage() {
  let tip = data.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림";
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Honey Tip</Text>
      <Text style={styles.weather}>
        Weather: {todayWeather + "°C " + todayCondition}{" "}
      </Text>
      <Image style={styles.mainImage} source={{ uri: mainImage}} />
      <WideScrollMenu /> 
      <ListContentView item={tip} />
    </ScrollView>
  );
}
