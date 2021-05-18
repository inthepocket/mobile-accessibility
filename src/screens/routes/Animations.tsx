import React from 'react';
import { ScrollView, StyleSheet, Animated } from 'react-native';

import Body from '../../components/Body';
import Header from '../../components/Header';
import useRotate from '../../hooks/animations/useRotate';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

const Animations = () => {
  const { style: rotateStyle } = useRotate();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.Image
        style={[styles.image, rotateStyle]}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
        }}
      />
      <Body>
        During our continuous accessibility (mainly screen reader) effort in Reac Native, we bumped
        into an issue where focus would be lost for the screen reader when navigating to a new view
        in a stack using React Navigation.
      </Body>
      <Body>
        You would transition from the overview to a detail page, but instead o respecting the
        navigation tree for that page, react-navigation would fo the screen reader on the position
        your focus was in the previous sc This would pose a big problem of course: Imagine scrolling
        through g list (FlatList), then navigating to the detail for the item you tapped, and having
        the screen reader focus somewhere on the middle of the screen.
      </Body>
      <Body>
        This issue was however only happening on iOS.My guess was that react-navigation in some way
        does not respect the iOS native navigati elements and does some JS things inbetween, which
        makes iOS act up in this case.
      </Body>
      <Header>The fix</Header>
      <Body>
        To fix it, we created the useAccessibilityFocus hook!It’s very simple and will just return a
        ref to bind to your element, and a function to trigger focus to the element carrying the
        ref:
      </Body>
    </ScrollView>
  );
};

Animations.title = 'Animations';

Animations.description = 'Handle animations with care for users with reduced motion';

export default Animations;
