import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bg from "./assets/bg.jpeg";
import { COLORS } from "./src/constants/themes";
import { Circle } from "./src/components/Circle";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg}>
        <Circle />
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
    paddingTop: 20,
  },
});
