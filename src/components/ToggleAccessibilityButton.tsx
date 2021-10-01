import React from 'react';
import { FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAppMode, Mode } from '../hooks/useAppMode';

const ToggleAccessibilityButton = () => {
  const { isAccessible, setMode } = useAppMode();

  return (
    <FAB
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
