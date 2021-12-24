import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Game from "../classes/game";

type NavProps = NativeStackScreenProps<{
  game: {game: Game};
}>;

export default function GameScreen({ route, navigation }: NavProps) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const { game } = route.params as {game: Game};
  return (
    <View style={backgroundStyle}>
      <Text>Game #{game.id}</Text>
      <Text>Code Length: {game.code_length}</Text>
      <Text>Last Move: {game.updated_at.toLocaleDateString()}</Text>
    </View>
  );
}