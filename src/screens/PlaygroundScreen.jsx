import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Row } from "../components/Row";

const emptyField = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function PlaygroundScreen({
  currentTurn,
  setCurrentTurn,
  gameMode,
  setGameMode,
}) {
  const [playground, setPlayground] = useState(emptyField);

  const copyPlayground = (original) => {
    const copy = JSON.parse(JSON.stringify(original));
    return copy;
  };

  useEffect(() => {
    if (currentTurn === "0") {
      bot();
    }
  }, [currentTurn]);

  useEffect(() => {
    const winner = getWinner(playground);

    if (winner) {
      gameWon(winner);
    } else {
      tie();
    }
  }, [playground]);

  const handlePress = (rowId, cellId) => {
    if (playground[rowId][cellId] !== "") {
      Alert.alert("Position already occupied");
      return;
    }

    const updatedPlayground = [...playground];

    if (updatedPlayground[rowId][cellId] === "") {
      updatedPlayground[rowId][cellId] = currentTurn;
      setPlayground(updatedPlayground);
    }

    setCurrentTurn(currentTurn === "x" ? "0" : "x");
  };

  const getWinner = (playgroundWinner) => {
    for (let i = 0; i < 3; i++) {
      const isXRowWin = playgroundWinner[i].every((cell) => cell === "x");
      const isORowWin = playgroundWinner[i].every((cell) => cell === "0");

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
        if (playgroundWinner[row][col] !== "x") {
          isXColumnWin = false;
        }
        if (playgroundWinner[row][col] !== "0") {
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
      if (playgroundWinner[i][i] !== "0") {
        isOLeftDiagonalWin = false;
      }

      if (playgroundWinner[i][i] !== "x") {
        isXLeftDiagonalWin = false;
      }

      if (playgroundWinner[i][2 - i] !== "0") {
        isORightDiagonalWin = false;
      }

      if (playgroundWinner[i][2 - i] !== "x") {
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

  const bot = () => {
    const possiblePositions = [];
    playground.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === "") {
          possiblePositions.push({ row: rowIndex, col: colIndex });
        }
      });
    });

    let chosenPosition;

    possiblePositions.forEach((possiblePosition) => {
      const playgroundCopy = copyPlayground(playground);
      playgroundCopy[possiblePosition.row][possiblePosition.col] = "0";

      const winner = getWinner(playgroundCopy);
      if (winner === "0") {
        chosenPosition = possiblePosition;
      }
    });

    if (!chosenPosition) {
      possiblePositions.forEach((possiblePosition) => {
        const playgroundCopy = copyPlayground(playground);
        playgroundCopy[possiblePosition.row][possiblePosition.col] = "x";

        const winner = getWinner(playgroundCopy);
        if (winner === "x") {
          chosenPosition = possiblePosition;
        }
      });
    }

    if (!chosenPosition) {
      chosenPosition =
        possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    }

    if (chosenPosition) {
      handlePress(chosenPosition.row, chosenPosition.col);
    }
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
