import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bg from "./assets/bg.jpeg";
import { COLORS } from "./src/constants/themes";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg}>
        <View style={styles.circle}>
          <View style={styles.innerCircle}></View>
        </View>
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
  circle: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.items,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.background,
    borderRadius: 9999,
  },
});
