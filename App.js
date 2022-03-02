import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./Components/screens/SearchScreen";
import ShowResultsScreen from "./Components/screens/ShowResultsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={SearchScreen}
          options={{ title: "Business Search" }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ShowResultsScreen}
          options={{ title: "Show Result Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
