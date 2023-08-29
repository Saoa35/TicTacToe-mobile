import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "./src/constants/themes";
import PlaygroundScreen from "./src/screens/PlaygroundScreen";

export default function App() {
  const [currentTurn, setCurrentTurn] = useState("x");
  const [gameMode, setGameMode] = useState("BOT_MEDIUM");

  return (
    <View style={styles.container}>
      <Text style={styles.turn}>Current Turn: {currentTurn.toUpperCase()}</Text>
      <PlaygroundScreen
        currentTurn={currentTurn}
        setCurrentTurn={setCurrentTurn}
        gameMode={gameMode}
      />
      <View style={styles.buttons}>
        <Text
          onPress={() => setGameMode("LOCAL")}
          style={[
            styles.button,
            {
              backgroundColor:
                gameMode === "LOCAL" ? COLORS.cells : COLORS.gray,
            },
          ]}
        >
          Local
        </Text>
        <Text
          onPress={() => setGameMode("BOT_EASY")}
          style={[
            styles.button,
            {
              backgroundColor:
                gameMode === "BOT_EASY" ? COLORS.cells : COLORS.gray,
            },
          ]}
        >
          Easy Bot
        </Text>
        <Text
          onPress={() => setGameMode("BOT_MEDIUM")}
          style={[
            styles.button,
            {
              backgroundColor:
                gameMode === "BOT_MEDIUM" ? COLORS.cells : COLORS.gray,
            },
          ]}
        >
          Medium Bot
        </Text>
      </View>
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
    position: "relative",
  },
  turn: {
    fontSize: 24,
    color: COLORS.items,
    position: "absolute",
    top: "8%",
  },
  buttons: {
    position: "absolute",
    bottom: "10%",
    flexDirection: "row",
  },
  button: {
    marginHorizontal: "5%",
    padding: "2%",
    borderRadius: 10,
    color: COLORS.items,
    fontSize: 20,
  },
});
