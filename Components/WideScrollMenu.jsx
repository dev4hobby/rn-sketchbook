import React from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/main";



const WideScrollMenu = () => {

  const categoryFilter = (c) => {
    if (c === "전체보기") {
      setCategory(state)
    } else {
      setCategory(state.filter((d) => {
        return d.category === c
      }))
    }
  }

  return (
    <ScrollView
      style={styles.middleContainer}
      horizontal
      indicatorStyle={"white"}
    >

      <TouchableOpacity style={styles.middleButtonAll} onPress={() => {}}>
        <Text style={styles.middleButtonText}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.middleButton01} onPress={ () => {}}>
        <Text style={styles.middleButtonText}>Lifestyle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.middleButton02} onPress={ () => {}}>
        <Text style={styles.middleButtonText}>Economy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.middleButton03} onPress={ () => {}}>
        <Text style={styles.middleButtonText}>Animals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.middleButton04} onPress={ () => {}}>
        <Text style={styles.middleButtonText}>Tips</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default WideScrollMenu;