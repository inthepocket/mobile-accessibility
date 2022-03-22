import React, { PropsWithChildren, useEffect, useState } from 'react';
import { View, Pressable, ScrollView, StyleSheet } from 'react-native';
import Body from '../../components/Body';
import ToggleAccessibilityButton from '../../components/ToggleAccessibilityButton';
import useAccessible from '../../hooks/useAccessible';
import { getBetween } from '../../utils/number';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f49fe3',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  progressContainer: {
    flex: 1,
    height: 8,
    backgroundColor: 'gray',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  progress: {
    backgroundColor: 'rgb(64, 173, 88)',
    height: 8,
  },
});

interface ProgressProps {
  min?: number;
  max?: number;
  current?: number;
}
const Progress = ({ min = 0, max = 1, current = getBetween(min, max - 0.1) }: ProgressProps) => {
  const [progress, setProgress] = useState(current);

  const a11y = useAccessible({
    accessibilityState: {
      busy: progress < max,
    },
    accessibilityValue: { min, max, now: current },
    accessibilityRole: 'progressbar',
  });

  useEffect(() => {
    setProgress(current);
  }, [current]);

  return (
    <Pressable
      onPress={() => (progress < max ? setProgress(max) : setProgress(getBetween(min, max - 0.1)))}
      {...a11y}
    >
      <View style={styles.progressContainer}>
        <View style={[styles.progress, { width: `${current * 100}%` }]} />
      </View>
    </Pressable>
  );
};

interface ButtonProps {
  disabled?: boolean;
}
const Button = ({ children, disabled }: PropsWithChildren<ButtonProps>) => {
  const a11y = useAccessible({
    accessibilityState: {
      disabled,
    },
  });
  return (
    <Pressable
      style={disabled ? [styles.button, { opacity: 0.2 }] : styles.button}
      disabled={disabled}
      {...a11y}
    >
      <Body>{children}</Body>
    </Pressable>
  );
};

// disabled, checked, in progress, loading, busy
const State = () => {
  return (
    <>
      <ScrollView>
        <Button>Enabled button</Button>
        <Button disabled>Disabled button</Button>
        <Progress />
      </ScrollView>
      <ToggleAccessibilityButton />
    </>
  );
};

State.title = 'Item state';
State.description = 'The importance of adding the correct accessibility state';

export default State;
