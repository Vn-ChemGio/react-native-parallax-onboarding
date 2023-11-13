import type {
  ColorValue,
  ImageProps,
  StyleProp,
  TextStyle,
} from 'react-native';

export type PageInterface = Pick<ImageProps, 'source'> & {
  title: string;
  description?: string;
};

export type ParallaxOnboardingProps = {
  data: PageInterface[];
  onEnd: Function;
  backgroundColor?: ColorValue;
  headerTextStyle?: StyleProp<TextStyle>;
  hideDot?: boolean;
};
