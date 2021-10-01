import React from 'react';
import { ScrollView, StyleSheet, View, PixelRatio } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

import Body from '../../components/Body';
import ToggleAccessibilityButton from '../../components/ToggleAccessibilityButton';
import { useAppMode } from '../../hooks/useAppMode';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

const FontScaling = () => {
  const { isAccessible } = useAppMode();

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <View style={{ paddingHorizontal: 20 }}>
            <Body>
              All content is wrapped inside a ScrollView wrapper. Without this wrapper, the layout
              is static and won't scroll.
            </Body>
            <Body>
              Icons should upscale according to the pixel ratio. Multiply your icon size with the
              font scale pixel ratio.
            </Body>
          </View>
          <ListItem bottomDivider>
            <Icon name="mail-outline" size={14 * (isAccessible ? PixelRatio.getFontScale() : 1)} />
            <ListItem.Content>
              <ListItem.Title>Contact us</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <Icon name="shield" size={14 * (isAccessible ? PixelRatio.getFontScale() : 1)} />
            <ListItem.Content>
              <ListItem.Title>Privacy policy</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      </ScrollView>
      <ToggleAccessibilityButton />
    </>
  );
};

FontScaling.title = 'Font scaling';
FontScaling.description = 'Handle large font scales with care';
FontScaling.tooltip =
  'If you are using react navigation, you should use the Native Stack Navigator to implement stacks. It has support for large headers, making the header of your screen more accessible.';

export default FontScaling;
