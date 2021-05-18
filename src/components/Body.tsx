import React, { PropsWithChildren } from 'react';
import { Text, StyleSheet } from 'react-native';
import useAccessible from '../hooks/useAccessible';

type Props = React.ComponentProps<typeof Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

const Body = React.forwardRef<Text, PropsWithChildren<Props>>((props, ref) => {
  const { accessibilityHint, style, children, ...rest } = props;
  const a11y = useAccessible({
    accessibilityHint,
  });

  return (
    <Text ref={ref} style={style ? [styles.text, style] : styles.text} {...rest} {...a11y}>
      {children}
    </Text>
  );
});

export default Body;
