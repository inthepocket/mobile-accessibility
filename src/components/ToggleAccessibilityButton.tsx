import React from 'react';
import { FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAppMode, Mode } from '../hooks/useAppMode';

const ToggleAccessibilityButton = () => {
  const { isAccessible, setMode } = useAppMode();

  return (
    <FAB
      accessibilityLabel={
        isAccessible ? 'Disable accessibility features' : 'Enable accessibility features'
      }
      accessibilityHint={
        isAccessible
          ? 'Press this button to disable accessibility features'
          : 'Press this button to enable accessibility features'
      }
      color="#001594"
      icon={
        <Icon size={25} name={isAccessible ? 'accessibility' : 'not-accessible'} color="white" />
      }
      placement="right"
      onPress={() => setMode(isAccessible ? Mode.INACCESSIBLE : Mode.ACCESSIBLE)}
    />
  );
};

export default ToggleAccessibilityButton;
