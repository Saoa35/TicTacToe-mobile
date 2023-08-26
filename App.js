import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bg from "./assets/bg.jpeg";
import { COLORS } from "./src/constants/themes";
import { Circle } from "./src/components/Circle";
import { Cross } from "./src/components/Cross";
import { useState } from "react";

export default function App() {
  const [playgraund, setPlayground] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg}>
        <View style={styles.playgraund}>
          <Circle />
          <Cross />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
  bg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    paddingTop: 20,
  },
  playgraund: {
    borderWidth: 1,
    borderColor: COLORS.items,
    width: "93%",
    aspectRatio: 1,
  },
});
