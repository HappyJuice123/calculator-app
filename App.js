import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Calculator } from "./components/CalculatorApp";

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#530707",
    alignItems: "center",
    justifyContent: "center",
  },
});
