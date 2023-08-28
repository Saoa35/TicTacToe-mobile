import React from "react";
import { StyleSheet, View } from "react-native";
import { Cell } from "./Cell.jsx";

export const Row = ({ row, rowId, handlePress }) => {
  return (
    <View style={styles.row}>
      {row.map((cell, cellId) => (
        <Cell
          key={cellId}
          cell={cell}
          cellId={cellId}
          handlePress={handlePress}
          rowId={rowId}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
  },
});
