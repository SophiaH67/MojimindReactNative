import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useColorScheme} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Game from './classes/game';
import GameScreen from './screens/GameScreen';
import HomeScreen from './screens/HomeScreen';

export type RootStackParamList = {
  Game: {
    game: Game;
  };
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          },
          headerTintColor: isDarkMode ? '#fff' : '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Games',
          }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={({ route }) => ({
            title: `Game #${route.params.game.id}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
