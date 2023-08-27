import React, { useState } from "react";
import {
  Alert,
  // ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import bg from "../../assets/bg";
import { Circle } from "../components/Circle";
import { Cross } from "../components/Cross";
import { COLORS } from "../constants/themes";

const emptyField = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function PlaygroundScreen() {
  const [playground, setPlayground] = useState(emptyField);

  const [currentTurn, setCurrentTurn] = useState("x");

  const handlePress = (rowId, cellId) => {
    const updatedPlayground = [...playground];

    if (updatedPlayground[rowId][cellId] === "") {
      updatedPlayground[rowId][cellId] = currentTurn;
      setPlayground(updatedPlayground);
    }

    setCurrentTurn(currentTurn === "x" ? "0" : "x");

    winnerCheck();
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

  const winnerCheck = () => {
    for (let i = 0; i < playground.length; i++) {
      const isXRowWin = playground[i].every((cell) => cell === "x");
      const isORowWin = playground[i].every((cell) => cell === "0");

      if (isXRowWin) {
        gameWon("X");
      }

      if (isORowWin) {
        gameWon("O");
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
        gameWon("X");
      }

      if (isOColumnWin) {
        gameWon("O");
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

    if (isOLeftDiagonalWin) {
      gameWon("O");
    }

    if (isXLeftDiagonalWin) {
      gameWon("X");
    }

    if (isORightDiagonalWin) {
      gameWon("O");
    }

    if (isXRightDiagonalWin) {
      gameWon("X");
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
    width: "93%",
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    borderColor: COLORS.cells,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
