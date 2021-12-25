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
  return (
    <TouchableOpacity>
      <View
        style={
          {
            // paddingVertical: 5,
            // paddingHorizontal: 10,
            // backgroundColor: Colors.lighter,
          }
        }>
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
      </View>
    </TouchableOpacity>
  );
}