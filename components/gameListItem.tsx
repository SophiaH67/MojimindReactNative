import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Game from "../classes/game";

type Props = {
  game: Game;
};

export default function GameListItem({ game }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Game #{game.id}</Text>
      <Text>Code Length: {game.code_length}</Text>
      <Text>Last Move: {game.updated_at.toLocaleDateString()}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollView: {
    // height: 1000,
  },
});