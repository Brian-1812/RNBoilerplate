import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import I18n from '../Utils/i18n';
import * as StackScreens from '../Screens/StackScreens';

enableScreens();
const Stack = createStackNavigator();

function StackNavigator() {
  const { language } = useSelector((state) => ({
    language: state.language.language,
  }));
  
  useEffect(() => {
    if (language) {
      I18n.locale = language;
    }
    SplashScreen.hide();
  }, []);
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          component={StackScreens.Home}
          name="Home"
        />
      </Stack.Navigator>
  );
}
export default StackNavigator;
