import Constants from 'expo-constants';
import { AccessibilityProps } from 'react-native';
import { useAppMode } from './useAppMode';

export default function useAccessible(a11yProps: AccessibilityProps): Partial<AccessibilityProps> {
  const { isAccessible } = useAppMode();
  const isAccessibilityBuild = Constants.manifest.extra?.flags.mode === 'accessible';

  return isAccessible ? a11yProps : {};
}
