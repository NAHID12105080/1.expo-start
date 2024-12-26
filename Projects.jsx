// Card.jsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Projects({ imageSource, projectName }) {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{projectName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // elevation: 2,
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
  image: {
    aspectRatio: 16 / 9,

    height: 150,
    borderRadius: 8,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
