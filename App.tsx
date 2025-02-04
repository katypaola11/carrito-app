import 'react-native-gesture-handler'
import React from 'react'
import LogisScreen from './src/screens/LogisScreen'
import {NavigationContainer} from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
