import React, { PropsWithChildren, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppModeProvider } from './hooks/useAppMode';

const AppProviders = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <SafeAreaProvider>
      <AppModeProvider>{children}</AppModeProvider>
    </SafeAreaProvider>
  );
};

export default AppProviders;
