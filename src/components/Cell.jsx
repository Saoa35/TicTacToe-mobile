import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Circle } from "./Circle";
import { Cross } from "./Cross";
import { COLORS } from "../constants/themes";

export const Cell = ({ cell, cellId, rowId, handlePress }) => {
  return (
    <Pressable onPress={() => handlePress(rowId, cellId)} style={styles.cell}>
      {cell === "0" ? <Circle /> : cell === "x" ? <Cross /> : ""}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    borderColor: COLORS.cells,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
