import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokémon"
          options={{
            headerTitle: "Lista de Pokemón",
            headerTitleAlign: "center",
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Detalhes"
          options={{
            headerBackTitle: "",
          }}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
