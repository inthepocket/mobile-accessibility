import React, { PropsWithChildren } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { ListItem, ListItemProps } from 'react-native-elements';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import { hasLargeFontScale } from '../utils/dimensions';

interface Action {
  label: string;
  onSwipe: () => void;
  backgroundColor?: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  leftAction: {
    alignItems: 'flex-start',
    paddingLeft: 8 * 5,
  },
  rightAction: {
    alignItems: 'flex-end',
    paddingRight: 8 * 5,
  },
});

function renderLeftActions(
  action: Action,
  _: Animated.AnimatedInterpolation,
  dragX: Animated.AnimatedInterpolation,
) {
  const transform = dragX.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const { label, backgroundColor } = action;

  return (
    <RectButton
      style={[
        styles.container,
        styles.leftAction,
        {
          backgroundColor: backgroundColor || 'rgb(125, 194, 97)',
        },
      ]}
    >
      <Animated.Text
        style={{
          transform: [{ translateX: transform }],
        }}
      >
        {label}
      </Animated.Text>
    </RectButton>
  );
}

function renderRightActions(
  action: Action,
  _: Animated.AnimatedInterpolation,
  dragX: Animated.AnimatedInterpolation,
) {
  const transform = dragX.interpolate({
    inputRange: [-80, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const { label, backgroundColor } = action;

  return (
    <RectButton
      style={[
        styles.container,
        styles.rightAction,
        {
          backgroundColor: backgroundColor || 'rgb(215, 71, 70)',
        },
      ]}
    >
      <Animated.Text
        style={{
          transform: [{ translateX: transform }],
        }}
      >
        {label}
      </Animated.Text>
    </RectButton>
  );
}

interface Props extends ListItemProps {
  title: string;
  subtitle: string;
  leftAction?: Action;
  rightAction?: Action;
}

const SwipeableListItem = React.forwardRef<Swipeable, PropsWithChildren<Props>>((props, ref) => {
  const { children, title, subtitle, leftAction, rightAction, ...restProps } = props;

  return (
    <Swipeable
      friction={2}
      leftThreshold={100}
      onSwipeableLeftOpen={leftAction?.onSwipe}
      onSwipeableRightOpen={rightAction?.onSwipe}
      renderLeftActions={(...args) =>
        leftAction ? renderLeftActions(leftAction, ...args) : undefined
      }
      renderRightActions={(...args) =>
        rightAction ? renderRightActions(rightAction, ...args) : undefined
      }
      rightThreshold={100}
      ref={ref}
    >
      <ListItem topDivider bottomDivider {...restProps}>
        <View
          style={{
            flex: 1,
            paddingVertical: 10,
          }}
        >
          <ListItem.Title>{title}</ListItem.Title>
          <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
        </View>
        <ListItem.Subtitle>{children}</ListItem.Subtitle>
      </ListItem>
    </Swipeable>
  );
});

export default SwipeableListItem;
