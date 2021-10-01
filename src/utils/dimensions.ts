import { PixelRatio } from 'react-native';

export const hasLargeFontScale = () => {
  return PixelRatio.getFontScale() >= 1.4;
};
