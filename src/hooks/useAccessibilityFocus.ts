import { useCallback, useRef, Component, ComponentClass, RefObject } from 'react';
import { AccessibilityInfo, findNodeHandle, Platform } from 'react-native';

/**
 * Returns a ref object which when bound to an element, will focus that
 * element in VoiceOver on its appearance
 * @platform iOS
 */
export default function useAccessibilityFocus<
  R extends number | Component<any, any> | ComponentClass<any, any>,
>(): [RefObject<R>, () => void] {
  const ref = useRef<R>(null);

  const setFocus = useCallback(() => {
    if (Platform.OS === 'ios') {
      if (ref.current) {
        const focusPoint = findNodeHandle(ref.current);
        if (focusPoint) {
          // Doesn't work without a small timeout.
          setTimeout(() => {
            AccessibilityInfo.setAccessibilityFocus(focusPoint);
          }, 100);
        }
      }
    }
  }, [ref]);

  return [ref, setFocus];
}
