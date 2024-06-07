import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const Card = ({ data }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://logos-world.net/wp-content/uploads/2023/09/ABC-News-Emblem.png",
          }}
          style={{
            height: 50,
            width: 50,
          }}
          contentFit="cover"
        />
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
          </View>

          <Text>{data.followers}</Text>
        </View>
      </View>

      <Pressable>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Follow</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor:'gray',
    borderBottomWidth:1
  },
  textContainer: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    color: "gray",
  },
  buttonContainer:{
    borderWidth:1,
    borderColor:'black',
    borderRadius:4,
    paddingHorizontal:8,
    paddingVertical:4
  },
  buttonText:{
    fontSize:16,
    fontWeight:"semibold"
  }
});
