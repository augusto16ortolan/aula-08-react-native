import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import PokemonCard from "../components/PokemonCard";
import { mockPokemon } from "../data/pokemonData";

import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchPokemons() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"
      );
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function extractPokemonId(url) {
    const parts = url.split("/");
    return parts[parts.length - 2];
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <PokemonCard
          pokemon={{ ...item, id: extractPokemonId(item.url) }}
          onPress={() =>
            navigation.navigate("Detalhes", {
              pokemon: { ...item, id: extractPokemonId(item.url) },
            })
          }
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
