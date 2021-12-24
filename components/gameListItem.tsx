import { useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { RootStackParamList } from "../App";
import Game from "../classes/game";

type Props = {
  game: Game;
};


export default function GameListItem({game}: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        // navigate to game screen
        navigation.navigate('Game', {
          game: game,
        });
      }}>
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