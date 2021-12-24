import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Game from '../classes/game';
import { getGame } from '../lib/api';

export default function GamesList() {
  const [gameIDs, setGameIDs] = useState([1,2,3]);
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all(gameIDs.map(getGame)).then(setGames).finally(() => setIsLoading(false));
  }, [gameIDs]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic">
        {isLoading ? ( <Text>Loading...</Text> ) : (
          <View>
            {games.map(game => (
              <View key={game.id}>
                <Text style={styles.title}>Game #{game.id}</Text>
                <Text>Code Length: {game.code_length}</Text>
              </View>
            ))}
          </View>
        )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fff"
  },
});