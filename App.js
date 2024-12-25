import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/nlp1.png")}
        style={{ width: "100%", height: 200 }}
      />
      <Image
        source={require("./assets/nahid.png")}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          marginTop: -50,
          borderWidth: 2,
          borderColor: "yellow",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 5,
        }}
      />

      <Text style={{ fontSize: 10, fontWeight: "bold" }}>Md Nahid Hassan</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
