import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Linking,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Correct FontAwesome import
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const getInTouch = () => {
    Linking.openURL("mailto:nahid151341@gmail.com");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
        <View style={styles.container}>
          {/* Cover Image */}
          <Image
            source={require("./assets/nlp1.png")}
            style={styles.coverImage}
          />
          {/* Profile Image */}
          <Image
            source={require("./assets/nahid.png")}
            style={styles.profileImage}
          />
          {/* Name */}
          <Text style={styles.nameText}>Md Nahid Hassan</Text>
          {/* Social Icons */}
          <View style={styles.socialIcons}>
            <FontAwesome
              name="github"
              size={24}
              color="black"
              style={styles.icon}
            />
            <FontAwesome
              name="linkedin"
              size={24}
              color="black"
              style={styles.icon}
            />
            <FontAwesome
              name="twitter"
              size={24}
              color="black"
              style={styles.icon}
            />
          </View>
          {/* Get In Touch Button */}
          <Button title="Get In Touch" onPress={getInTouch} />
          {/* Scrollable Text */}
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.scrollText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              scelerisque, nunc in ultricies luctus, nulla eros tincidunt orci,
              ac tincidunt erat ex eu purus. Sed sed nisl nec nisl fermentum
              sollicitudin. Integer auctor, mi sit amet ultricies interdum, nunc
              justo tincidunt erat, vel porttitor dui felis a dui. Fusce nec
              scelerisque odio. Nullam vel purus auctor, tincidunt risus vel,
              scelerisque mi. Nullam nec metus nec eros ultrices ultricies.
              Aliquam erat volutpat. Sed nec ante ut justo ultricies tincidunt.
            </Text>
          </ScrollView>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  coverImage: {
    width: "100%",
    height: 200,
  },
  profileImage: {
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
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "black",
  },
  socialIcons: {
    flexDirection: "row",
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  scrollText: {
    fontSize: 16,
    textAlign: "justify",
    color: "black",
  },
});
