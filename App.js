import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "./src/constants/themes";
import PlaygroundScreen from "./src/screens/PlaygroundScreen";

export default function App() {
  const [currentTurn, setCurrentTurn] = useState("x");

  return (
    <View style={styles.container}>
      <Text>Current Turn: {currentTurn.toUpperCase()}</Text>
      <PlaygroundScreen
        currentTurn={currentTurn}
        setCurrentTurn={setCurrentTurn}
      />
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
});
