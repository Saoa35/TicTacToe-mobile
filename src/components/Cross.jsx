import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants/themes";

export const Cross = () => {
  return (
    <View style={styles.crossContainer}>
      <View style={styles.crossLineOne}></View>
      <View style={[styles.crossLineOne, styles.crossLineTwo]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  crossContainer: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    // position: "absolute",
  },
  crossLineOne: {
    width: 15,
    height: 110,
    backgroundColor: COLORS.items,
    borderRadius: 5,
    position: "absolute",

    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  crossLineTwo: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
});
