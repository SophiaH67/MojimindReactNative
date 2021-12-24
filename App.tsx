import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useColorScheme} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

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
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Games',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
