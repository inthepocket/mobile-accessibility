import React from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as routes from './screens/routes';
import Home from './screens/Home';
import InfoIcon from './components/InfoIcon';

const MainStack = createStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={Home.name}>
        <MainStack.Screen component={Home} name={Home.name} />
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
