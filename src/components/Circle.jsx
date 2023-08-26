import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants/themes";

export const Circle = () => {
  return (
    <View style={styles.circle}>
      <View style={styles.innerCircle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.items,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.background,
    borderRadius: 9999,
  },
});
