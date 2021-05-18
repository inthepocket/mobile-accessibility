import { RefObject, useEffect } from 'react';
import { AccessibilityProps } from 'react-native';
import useAccessibilityFocus from './useAccessibilityFocus';
import { useAppMode } from './useAppMode';

interface LiveRegionReturn {
  ref: RefObject<any>;
  prop: AccessibilityProps['accessibilityLiveRegion'];
}

/**
 * Returns a ref to be used on iOS and the live region prop for Android
 */
export default function useLiveRegion(
  mutableValue: any,
  verbosity: AccessibilityProps['accessibilityLiveRegion'],
): LiveRegionReturn {
  const [mode] = useAppMode();
  const [ref, setFocus] = useAccessibilityFocus();

  useEffect(() => {
    if (mode === 'accessible') {
      setFocus();
    }
  }, [mutableValue]);

  return { ref, prop: verbosity };
}
