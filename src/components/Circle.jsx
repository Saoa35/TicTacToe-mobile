import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants/themes";

export const Circle = () => {
  return <View style={styles.circle}></View>;
};

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderWidth: 15,
    borderColor: COLORS.items,
    borderRadius: 999,
  },
});
