import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet, View } from "react-native";

export default function PokemonCard({ pokemon, onPress }) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
          }}
          style={styles.image}
        />
        <Text style={styles.name}>{pokemon.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    // Sombras no Android
    elevation: 4,
    // Sombras no iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#333",
  },
});
