import React, { useState, useEffect } from "react";
import { Text, Image, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "../styles/main";
import data from "../data.json";
import Loading from "../Components/Loading";
import Card from "../Components/Card"
import { StatusBar } from "expo-status-bar";

export default function MainPage({navigation, route}) {
  const [state, setState] = useState([])
  const [categoryState, setCategoryState] = useState([])
  const [ready, setReady] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        title: `D3fau1t's paper`
      })
      setState(data.tip)
      setCategoryState(data.tip)
      setReady(false)
    }, 100)
  }, [])  
  const categoryFilter = (c) => {
    if (c == "All") {
      setCategoryState(state)
    } else {
      setCategoryState(state.filter((d) => {
        return d.category == c
      }))
    }
  }

  const todayWeather = 27;
  const todayCondition = "흐림";
  return ready ? <Loading /> : (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.weather}>
        Weather: {todayWeather + "°C " + todayCondition}{" "}
      </Text>
      <TouchableOpacity style={styles.aboutButton} onPress={()=>{navigation.navigate('AboutPage')}}>
          <Text style={styles.aboutButtonText}>About me</Text>
        </TouchableOpacity>
      <Image style={styles.mainImage} source={require('../assets/keepCalm.jpeg')} />
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        <TouchableOpacity style={styles.middleButtonAll} onPress={()=>{categoryFilter('All')}}><Text style={styles.middleButtonText}>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton01} onPress={()=>{categoryFilter('Lifestyle')}}><Text style={styles.middleButtonText}>Life</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02} onPress={()=>{categoryFilter('Tech')}}><Text style={styles.middleButtonText}>Tech</Text></TouchableOpacity>
      </ScrollView> 
      <View style={styles.cardContainer}>
        {
          categoryState.map((content, i) => {
            return <Card content={content} key={i} navigation={navigation}/>
          })
        }
      </View>
    </ScrollView>
  );
}
