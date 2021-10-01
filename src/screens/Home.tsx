import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Switch } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import Body from '../components/Body';
import ToggleAccessibilityButton from '../components/ToggleAccessibilityButton';
import { useAppMode } from '../hooks/useAppMode';

import * as routes from './routes';

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  screenTitles: {
    fontWeight: 'bold',
  },
  screenDescriptions: {
    color: '#333',
  },
});

const Home = () => {
  const navigation = useNavigation();
  const { mode, isAccessible } = useAppMode();

  return (
    <>
      <View style={styles.toggleContainer}>
        <Body allowFontScaling={!isAccessible}>
          {isAccessible ? '🥰' : '😕'} Running in '{mode}' mode
        </Body>
      </View>
      <FlatList
        data={Object.values(routes)}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => navigation.navigate(item.title)}
            containerStyle={{ paddingVertical: 20 }}
            topDivider
            bottomDivider
            accessible={isAccessible}
            accessibilityLabel={isAccessible ? item.title : undefined}
            accessibilityHint={isAccessible ? item.description : undefined}
          >
            <View>
              <ListItem.Title style={styles.screenTitles}>{item.title}</ListItem.Title>
              <ListItem.Subtitle style={styles.screenDescriptions}>
                {item.description}
              </ListItem.Subtitle>
            </View>
          </ListItem>
        )}
      />
      <ToggleAccessibilityButton />
    </>
  );
};

Home.title = 'Home';
Home.key = 'home';

export default Home;
