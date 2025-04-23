import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";

export default function DetailsScreen({ route }) {
  const { pokemon } = route.params;

  const [pokemonApi, setPokemonApi] = useState(null);

  async function getPokemonById() {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
    );
    setPokemonApi(response.data);
  }

  useEffect(() => {
    getPokemonById();
  }, []);

  if (pokemonApi == null) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Código</Text>
          <Text style={styles.value}>{pokemonApi.id}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>{pokemonApi.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Altura</Text>
          <Text style={styles.value}>{pokemonApi.height}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Peso</Text>
          <Text style={styles.value}>{pokemonApi.weight}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Tipos</Text>
          {pokemonApi.types.map((type) => {
            return (
              <Text key={type.type.name} style={styles.value}>
                {type.type.name}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,

    // Sombra Android
    elevation: 5,
    // Sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  image: {
    width: 200,
    height: 200,
  },
  infoContainer: {
    width: "100%",
    gap: 12,
    padding: 12,
  },
  infoItem: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  label: {
    fontSize: 15,
    color: "#666",
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
