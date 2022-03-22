import React from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import * as routes from './screens/routes';
import Home from './screens/Home';
import InfoIcon from './components/InfoIcon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppMode } from './hooks/useAppMode';

const MainStack = createNativeStackNavigator();

const MainRouter = () => {
  const { isAccessible } = useAppMode();
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={Home.title}
        screenOptions={{
          headerLargeTitle: isAccessible,
        }}
      >
        <MainStack.Screen component={Home} name={Home.title} />
        {Object.values<AppRoute>(routes).map(view => (
          <MainStack.Screen
            key={view.title}
            component={view}
            name={view.title}
            options={{
              headerRight: () =>
                view.tooltip ? (
                  <InfoIcon onPress={() => Alert.alert(view.description, view.tooltip)} />
                ) : undefined,
            }}
          />
        ))}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
