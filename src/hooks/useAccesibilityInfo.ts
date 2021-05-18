import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';

type AccessibilityState = Partial<{
  screenReaderEnabled: boolean;
  prefersReducedMotion: boolean;
  prefersReducedTransparency: boolean;
  prefersBoldText: boolean;
}>;

export default function useAccessibilityInfo(): AccessibilityState {
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [prefersReducedTransparency, setPrefersReducedTransparency] = useState(false);
  const [prefersBoldText, setPrefersBoldText] = useState(false);

  const handleScreenReaderToggled = (isScreenReaderEnabled: boolean) => {
    setScreenReaderEnabled(isScreenReaderEnabled);
  };
  const handleReduceMotionToggled = (isReduceMotionEnabled: boolean) => {
    setPrefersReducedMotion(isReduceMotionEnabled);
  };
  const handleReduceTransparencyToggled = (isReduceTransparencyEnabled: boolean) => {
    setPrefersReducedTransparency(isReduceTransparencyEnabled);
  };
  const handleBoldTextToggled = (isBoldTextEnabled: boolean) => {
    setPrefersBoldText(isBoldTextEnabled);
  };

  useEffect(() => {
    let isMounted = true;

    AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      isMounted && handleScreenReaderToggled,
    );
    AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      isMounted && handleReduceMotionToggled,
    );
    AccessibilityInfo.addEventListener(
      'reduceTransparencyChanged',
      isMounted && handleReduceTransparencyToggled,
    );
    AccessibilityInfo.addEventListener('boldTextChanged', isMounted && handleBoldTextToggled);

    AccessibilityInfo.isScreenReaderEnabled().then(isScreenReaderEnabled => {
      isMounted && setScreenReaderEnabled(isScreenReaderEnabled);
    });
    AccessibilityInfo.isReduceMotionEnabled().then(isReduceMotionEnabled => {
      isMounted && setPrefersReducedMotion(isReduceMotionEnabled);
    });
    AccessibilityInfo.isReduceTransparencyEnabled().then(isReduceTransparencyEnabled => {
      isMounted && setPrefersReducedTransparency(isReduceTransparencyEnabled);
    });
    AccessibilityInfo.isBoldTextEnabled().then(isBoldTextEnabled => {
      isMounted && setPrefersBoldText(isBoldTextEnabled);
    });

    return () => {
      AccessibilityInfo.removeEventListener('reduceMotionChanged', handleReduceMotionToggled);
      AccessibilityInfo.removeEventListener('screenReaderChanged', handleScreenReaderToggled);
      AccessibilityInfo.removeEventListener(
        'reduceTransparencyChanged',
        handleReduceTransparencyToggled,
      );
      AccessibilityInfo.removeEventListener('boldTextChanged', handleBoldTextToggled);
      isMounted = false;
    };
  }, []);

  return {
    screenReaderEnabled,
    prefersReducedMotion,
    prefersReducedTransparency,
    prefersBoldText,
  };
}
