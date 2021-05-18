import { useCallback, useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import useAccessibilityInfo from '../useAccesibilityInfo';

export default function useRotate() {
  const { current: animation } = useRef(new Animated.Value(0));
  const { prefersReducedMotion } = useAccessibilityInfo();

  const performAnimation = useCallback(() => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => performAnimation());
  }, []);

  useEffect(() => {
    if (!prefersReducedMotion) {
      performAnimation();
    }
  }, []);

  const rotateAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return {
    animation: prefersReducedMotion ? null : rotateAnimation,
    style: prefersReducedMotion
      ? null
      : {
          transform: [{ rotate: rotateAnimation }],
        },
  };
}
