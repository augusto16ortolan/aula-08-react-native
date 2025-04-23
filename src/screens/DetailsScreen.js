import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Código</Text>
          <Text style={styles.value}>{pokemon.id}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>{pokemon.name}</Text>
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
