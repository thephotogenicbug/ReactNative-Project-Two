import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../SearchBar";
import yelp from "../../api/yelp";
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        searchTerm,
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onChange={setSearchTerm}
        onSubmit={searchApi}
      />
      <Text>SearchScreen</Text>
      <Text>We have found: {results.length} results</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
