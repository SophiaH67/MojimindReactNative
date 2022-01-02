import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, Text, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Game from "../classes/game";
import EmojiPicker from "../components/emojiPicker";
import GameRow from "../components/gameRow";
import SubmitButton from "../components/submitButton";

type NavProps = NativeStackScreenProps<{
  game: {game: Game};
}>;

export default function GameScreen({ route, navigation }: NavProps) {
  const isDarkMode = useColorScheme() === 'dark';
  
  const { game } = route.params as {game: Game};
  return (
    <ScrollView
      style={{
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        height: '100%',
      }}>
      <Text>Game #{game.id}</Text>
      <Text>Code Length: {game.code_length}</Text>
      <Text>Last Move: {game.updated_at.toLocaleDateString()}</Text>
      {/* JSON dump of the game.rows */}
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.dark : Colors.light,
          flexDirection: 'column',
          // Center the rows vertically
          alignItems: 'center',
        }}>
        {game.rows.map((row, i) => (
          <GameRow key={row.id} row={row} disabled={game.turn !== (11-i)} />
        ))}
      </View>
      <EmojiPicker game={game} />
      <SubmitButton game={game} />
    </ScrollView>
  );
}