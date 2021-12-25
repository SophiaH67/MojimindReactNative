import React from "react";
import { Text, useColorScheme, View } from "react-native";
import Row from "../classes/row";
import EmojiSlot from "./emojiSlot";

interface Props {
  disabled: boolean;
  row: Row;
}

export default function GameRow({ disabled, row }: Props) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        flexDirection: 'row',
        // flex: 1,
        // padding: 5,
      }}>
      {row.slots.map((slot, index) => (
        <EmojiSlot key={index} slot={slot} disabled={disabled} />
      ))}
    </View>
  );
}