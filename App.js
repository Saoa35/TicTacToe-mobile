import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { COLORS } from "./src/constants/themes";
import PlaygroundScreen from "./src/screens/PlaygroundScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <PlaygroundScreen />
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
