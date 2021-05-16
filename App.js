import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/Services/NavigationService';
import StackNavigator from './src/Navigation/StackNavigator'

const App = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator/>
    </NavigationContainer>
  );
};

export default App;
