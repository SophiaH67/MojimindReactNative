import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { RootStackParamList } from '../App';
import { createGame } from '../lib/api';

export default function NewGame() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: '#ee6e73',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 70,
        borderRadius: 100,
        zIndex: 1,
      }}
      onPress={async () => {
        const game = await createGame(4);
        navigation.navigate('Game', {game});
      }}>
      <Text style={{fontSize: 48}}>+</Text>
    </TouchableOpacity>
  );
}