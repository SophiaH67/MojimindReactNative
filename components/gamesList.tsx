import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import Game from '../classes/game';
import { getGame } from '../lib/api';
import GameListItem from './gameListItem';

export default function GamesList() {
  const [gameIDs, setGameIDs] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all(gameIDs.map(getGame))
      .then(setGames)
      .catch(console.error)
      .finally(() => setIsLoading(false))

  }, [gameIDs]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        horizontal={false}
        contentContainerStyle={{flexGrow: 1}}
        style={styles.scrollView}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          games.map(game => (
            <GameListItem key={game.id} game={game} />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollView: {
    // height: 1000,
  }
});