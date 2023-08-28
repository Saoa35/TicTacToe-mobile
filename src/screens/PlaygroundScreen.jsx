import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Cell } from "../components/Cell";

const emptyField = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function PlaygroundScreen({ currentTurn, setCurrentTurn }) {
  const [playground, setPlayground] = useState(emptyField);

  const handlePress = (rowId, cellId) => {
    const updatedPlayground = [...playground];

    if (updatedPlayground[rowId][cellId] === "") {
      updatedPlayground[rowId][cellId] = currentTurn;
      setPlayground(updatedPlayground);
    }

    setCurrentTurn(currentTurn === "x" ? "0" : "x");

    const winner = getWinner();

    if (winner) {
      gameWon(winner);
    } else {
      tie();
    }
  };

  const getWinner = () => {
    for (let i = 0; i < playground.length; i++) {
      const isXRowWin = playground[i].every((cell) => cell === "x");
      const isORowWin = playground[i].every((cell) => cell === "0");

      if (isXRowWin) {
        return "X";
      }

      if (isORowWin) {
        return "O";
      }
    }

    for (let col = 0; col < 3; col++) {
      let isXColumnWin = true;
      let isOColumnWin = true;

      for (let row = 0; row < 3; row++) {
        if (playground[row][col] !== "x") {
          isXColumnWin = false;
        }
        if (playground[row][col] !== "0") {
          isOColumnWin = false;
        }
      }

      if (isXColumnWin) {
        return "X";
      }

      if (isOColumnWin) {
        return "O";
      }
    }

    let isOLeftDiagonalWin = true;
    let isXLeftDiagonalWin = true;
    let isORightDiagonalWin = true;
    let isXRightDiagonalWin = true;

    for (let i = 0; i < 3; i++) {
      if (playground[i][i] !== "0") {
        isOLeftDiagonalWin = false;
      }

      if (playground[i][i] !== "x") {
        isXLeftDiagonalWin = false;
      }

      if (playground[i][2 - i] !== "0") {
        isORightDiagonalWin = false;
      }

      if (playground[i][2 - i] !== "x") {
        isXRightDiagonalWin = false;
      }
    }

    if (isOLeftDiagonalWin || isORightDiagonalWin) {
      return "O";
    }

    if (isXLeftDiagonalWin || isXRightDiagonalWin) {
      return "X";
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
        <View key={rowId} style={styles.row}>
          {row.map((cell, cellId) => (
            <Cell
              cell={cell}
              cellId={cellId}
              handlePress={handlePress}
              rowId={rowId}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

export default PlaygroundScreen;

const styles = StyleSheet.create({
  playground: {
    width: "93%",
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
});
