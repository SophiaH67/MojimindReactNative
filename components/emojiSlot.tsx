import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import emojiMap from "../classes/emojiMap";
import Slot from "../classes/slot";

interface Props {
  disabled: boolean;
  slot: Slot;
}

export default function EmojiSlot({ disabled, slot }: Props) {
  const [, updateState] = React.useState({});
  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        slot.value = slot.row.game.selected_emoji;
        forceUpdate();
      }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          color: '#ff0000',
          backgroundColor: disabled ? Colors.light : Colors.white,
          width: 50,
          height: 50,
          padding: 5,
          margin: 5,
        }}>
        {
          //@ts-ignore - It is correct... I-.. I think
          emojiMap[slot.value]
        }
      </Text>
    </TouchableOpacity>
  );
}