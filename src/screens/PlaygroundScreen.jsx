import React, { useState } from "react";
import {
  // ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import bg from "../../assets/bg";
import { Circle } from "../components/Circle";
import { Cross } from "../components/Cross";

function PlaygroundScreen() {
  const [playground, setPlayground] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const handlePress = (rowId, cellId) => {
    const updatedPlayground = [...playground];

    if (updatedPlayground[rowId][cellId] === "") {
      updatedPlayground[rowId][cellId] = "x";
      setPlayground(updatedPlayground);
    }
  };

  return (
    // <ImageBackground source={bg} style={styles.bg}>
    <View style={styles.playground}>
      {playground.map((row, rowId) => (
        <View key={rowId} style={styles.row}>
          {row.map((cell, cellId) => (
            <Pressable
              onPress={() => handlePress(rowId, cellId)}
              key={cellId}
              style={styles.cell}
            >
              {cell === "0" ? <Circle /> : cell === "x" ? <Cross /> : ""}
            </Pressable>
          ))}
        </View>
      ))}
    </View>
    // </ImageBackground>
  );
}

export default PlaygroundScreen;

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    paddingTop: 20,
  },
  playground: {
    // borderWidth: 1,
    // borderColor: COLORS.items,
    width: "93%",
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    borderColor: "green",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
