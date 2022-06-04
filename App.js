
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Show from './src/screens/Show';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{headerShown:false}}
        >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Show" component={Show} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;