import React from "react";
import { ScrollView, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import emojiMap from "../classes/emojiMap";
import Game from "../classes/game";
import EmojiSlot from "./emojiSlot";

interface Props {
  game: Game;
}

export default function EmojiPicker({ game }: Props) {
  const isDarkMode = useColorScheme() === "dark";

  const emojiMapArray = Object.entries(emojiMap);
  // Remove the first element, which is the empty string
  emojiMapArray.shift();

  const [, updateState] = React.useState({});
  const forceUpdate = React.useCallback(() => updateState({}), []);

  // A horizontal row of emoji slots(mapped from emojiMap)
  return (
    <ScrollView
      // Scroll horizontally
      horizontal={true}
      style={{
        flexDirection: 'row',
        // flex: 1,
        // padding: 5,
      }}>
      {/* Loop over emojiMap */}
      {emojiMapArray.map(([k, emoji], i) => (
        <TouchableOpacity
          key={i}
          onPress={() => {
            game.selected_emoji = i+1;
            forceUpdate();
          }}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              color: '#ff0000',
              backgroundColor:
                i + 1 === game.selected_emoji ? Colors.light : Colors.white,
              width: 50,
              height: 50,
              padding: 5,
              margin: 5,
            }}>
            {emoji}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}