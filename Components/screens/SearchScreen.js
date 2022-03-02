import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../SearchBar";
import yelp from "../../api/yelp";
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  // Call SearchApi when component
  // is first rendered. BAD CODE!
  // searchApi('pasta');
  
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onChange={setSearchTerm}
        onSubmit={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found: {results.length} results</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
