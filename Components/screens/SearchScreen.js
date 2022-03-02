import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../SearchBar";
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onChange={(newTerm) => setSearchTerm(newTerm)}
        onSubmit={() => console.log("Data submitted")}
      />
      <Text>SearchScreen</Text>
      <Text>{searchTerm}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
