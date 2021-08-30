import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/services/NavigationService';
import StackNavigator from './src/Navigation/StackNavigator'
import { setNavigationColor } from './src/services/AndroidNavbar';

const App = () => {
  setNavigationColor('#000000');
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor='#327fa8' barStyle="dark-content"/>
      <StackNavigator/>
    </NavigationContainer>
  );
};

export default App;
