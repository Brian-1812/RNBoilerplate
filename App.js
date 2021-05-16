/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/services/NavigationService';

const App = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <View>
        <Text>Hello</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
