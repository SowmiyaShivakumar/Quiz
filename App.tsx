/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './screens/home';
import play from './screens/playground';
const Stack = createNativeStackNavigator();
const quizApp = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component = {Home}
        />
      </Stack.Navigator>

      <Stack.Navigator>
        <Stack.Screen
          name = "Playground"
          component = {play}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default quizApp;