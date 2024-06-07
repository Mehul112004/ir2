import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../constants/data";
import Card from "../components/Card";
import { FlatList, ScrollView, TextInput, Text } from "react-native";

const Index = () => {
  const [text, setText] = useState("");
  const [searching, setSearching] = useState(false);
  const [filteredAccounts, setFilteredAccounts] = useState(data);

  const handleSearch = (text) => {
    setText(text);
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredAccounts(newData);
    } else {
      setFilteredAccounts(data);
    }
  };
  useEffect(() => {
    if (text) {
      setSearching(true);
    } else {
      setSearching(false);
    }
  }, [text]);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleSearch(text)}
        value={text}
        placeholder="useless placeholder"
      />
      <View>
        <FlatList
          data={searching == true ? filteredAccounts : data}
          renderItem={({ item }) => <Card data={item} />}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
