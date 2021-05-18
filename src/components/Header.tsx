import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';
import useAccessible from '../hooks/useAccessible';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

type Props = React.ComponentProps<typeof Text>;

const Header = ({ children, style, accessibilityHint, ...props }: PropsWithChildren<Props>) => {
  const accessibility = useAccessible({
    accessibilityRole: 'header',
    accessibilityHint,
  });

  return (
    <Text style={[styles.text, style]} {...props} {...accessibility}>
      {children}
    </Text>
  );
};

export default Header;
