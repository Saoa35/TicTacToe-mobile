import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants/themes";

export const Circle = () => {
  return <View style={styles.circle}></View>;
};

const styles = StyleSheet.create({
  circle: {
    width: "80%",
    height: "80%",
    borderWidth: 15,
    borderColor: COLORS.items,
    borderRadius: 999,
  },
});
