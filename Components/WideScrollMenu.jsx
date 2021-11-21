import React from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/main";

const WideScrollMenu = () => {
  return (
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
  );
};

export default WideScrollMenu;