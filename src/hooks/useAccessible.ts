import Constants from 'expo-constants';
import { AccessibilityProps } from 'react-native';
import { useAppMode } from './useAppMode';

export default function useAccessible(a11yProps: AccessibilityProps): Partial<AccessibilityProps> {
  const [mode] = useAppMode();
  const isAccessibilityBuild = Constants.manifest.extra?.flags.mode === 'accessible';

  if (mode === 'accessible') {
    return a11yProps;
  }

  return {};
}
