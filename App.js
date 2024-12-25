import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Linking,
  SafeAreaView,
} from "react-native";
import { Image } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export default function App() {
  const getInTouch = () => {
    Linking.openURL("mailto:nahid151341@gmail.com");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <View
        style={{
          backgroundColor: "green",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black", fontSize: 20 }}>Hello World</Text>
      </View>
    </SafeAreaView>

    // <View style={styles.container}>
    //   <Image
    //     source={require("./assets/nlp1.png")}
    //     style={{ width: "100%", height: 200 }}
    //   />

    //   <Image
    //     source={require("./assets/nahid.png")}
    //     style={{
    //       width: 100,
    //       height: 100,
    //       borderRadius: 50,
    //       marginTop: -50,
    //       borderWidth: 2,
    //       borderColor: "yellow",
    //       shadowColor: "black",
    //       shadowOffset: { width: 0, height: 2 },
    //       shadowOpacity: 0.5,
    //       shadowRadius: 2,
    //       elevation: 5,
    //     }}
    //   />

    //   <Text style={{ fontSize: 10, fontWeight: "bold" }}>
    //     Md Nahid Hassan
    //   </Text>

    //   <View style={{ flexDirection: "row", marginTop: 20 }}>
    //     <FontAwesome6
    //       name="github"
    //       size={24}
    //       color="black"
    //       style={{ marginHorizontal: 10 }}
    //     />
    //     <FontAwesome6
    //       name="linkedin"
    //       size={24}
    //       color="black"
    //       style={{ marginHorizontal: 10 }}
    //     />
    //     <FontAwesome6
    //       name="twitter"
    //       size={24}
    //       color="black"
    //       style={{ marginHorizontal: 10 }}
    //     />
    //   </View>

    //   <Button title="Get In Touch" onPress={getInTouch} />

    //   {/* <Button title="Click Me" onPress={() => alert("Hello World")} /> */}

    //   <ScrollView>
    //     <Text style={{ fontSize: 20, margin: 10 }}>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    //       scelerisque, nunc in ultricies luctus, nulla eros tincidunt orci, ac
    //       tincidunt erat ex eu purus. Sed sed nisl nec nisl fermentum
    //       sollicitudin. Integer auctor, mi sit amet ultricies interdum, nunc
    //       justo tincidunt erat, vel porttitor dui felis a dui. Fusce nec
    //       scelerisque odio. Nullam vel purus auctor, tincidunt risus vel,
    //       scelerisque mi. Nullam nec metus nec eros ultrices ultricies.
    //       Aliquam erat volutpat. Sed nec ante ut justo ultricies tincidunt.
    //       Nullam pharetra, dui sit amet malesuada sagittis, ante felis congue
    //       justo, nec ultr ices nunc nisl nec nisl. Nullam nec metus nec eros
    //       ultrices ultricies. Aliquam erat volutpat. Sed nec ante ut justo
    //       ultricies tincidunt. Nullam pharetra dui sit amet malesuada
    //       sagittis, ante felis
    //     </Text>
    //   </ScrollView>

    //   <StatusBar style="auto" />
    // </View>
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
