import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../SearchBar";
import yelp from "../../api/yelp";
import ResultsList from "../ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // console.log(results);

  // Filter By Price Range
  const filterResultByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

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
      <ResultsList results={filterResultByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultByPrice("$$$")} title="Big Spender" />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
