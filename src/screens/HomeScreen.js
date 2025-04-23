import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PokemonCard from "../components/PokemonCard";
import { mockPokemon } from "../data/pokemonData";

export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={mockPokemon}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <PokemonCard
          pokemon={item}
          onPress={() => navigation.navigate("Detalhes", { pokemon: item })}
        />
      )}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
