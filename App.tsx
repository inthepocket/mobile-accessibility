import 'react-native-gesture-handler';

import React from 'react';
import AppProviders from './src/AppProviders';
import MainRouter from './src/MainRouter';

export default function App() {
  return (
    <AppProviders>
      <MainRouter />
    </AppProviders>
  );
}
