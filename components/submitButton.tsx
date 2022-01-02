import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Game from "../classes/game";
import { guessGame } from "../lib/api";

interface Props {
  game: Game;
}

export default function SubmitButton({game} : Props) {
  return (
    <TouchableOpacity
      disabled={!(game.won || game.lost)}
      onPress={() => guessGame(game)}
      style={{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        bottom: 10,
        right: 10,
        height: 70,
        borderRadius: 100,
      }}>
      <Text style={{fontSize: 48}}>Submit</Text>
    </TouchableOpacity>
  );
}