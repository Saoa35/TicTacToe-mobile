import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Row } from "../components/Row";
import { emptyField } from "../constants/constants";
import { getWinner } from "../constants/functions";

function PlaygroundScreen({ currentTurn, setCurrentTurn }) {
  const [playground, setPlayground] = useState(emptyField);

  const handlePress = (rowId, cellId) => {
    const updatedPlayground = [...playground];

    if (updatedPlayground[rowId][cellId] === "") {
      updatedPlayground[rowId][cellId] = currentTurn;
      setPlayground(updatedPlayground);
    }

    setCurrentTurn(currentTurn === "x" ? "0" : "x");

    const winner = getWinner(playground);

    if (winner) {
      gameWon(winner);
    } else {
      tie();
    }
  };

  const tie = () => {
    if (!playground.some((row) => row.some((cell) => cell === ""))) {
      Alert.alert(`Tie`, `It is a Tie !`, [
        { text: "Restart", onPress: resetGame },
      ]);
    }
  };

  const gameWon = (player) => {
    Alert.alert(`Congradulation`, `Player ${player} won !!!`, [
      { text: "Restart", onPress: resetGame },
    ]);
  };

  const resetGame = () => {
    setPlayground([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentTurn("x");
  };

  return (
    <View style={styles.playground}>
      {playground.map((row, rowId) => (
        <Row key={rowId} row={row} rowId={rowId} handlePress={handlePress} />
      ))}
    </View>
  );
}

export default PlaygroundScreen;

const styles = StyleSheet.create({
  playground: {
    width: "90%",
    aspectRatio: 1,
  },
});
