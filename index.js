/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { name as appName } from './app.json';
import configureStore from './src/store/Store';

export default function Main() {
  const { store, persistor } = configureStore();
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
