import React from 'react';
import {
  type NativeSyntheticEvent,
  type NativeTouchEvent,
  StyleSheet,
  type TextProps,
} from 'react-native';
import Animated, {
  processColor,
  type SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import { bin, mix, mixColor, ReText, round } from 'react-native-redash';

import type { PageInterface } from '../types';
import { CIRCLE_WIDTH, PAGE_WIDTH } from '../constants';

interface DotProps extends TextProps {
  translateX: SharedValue<number>;
  data: PageInterface[];
}

const Button: React.FC<DotProps> = ({ translateX, data, onPressIn }) => {
  const isActive = bin(
    round(translateX.value / PAGE_WIDTH) === data.length - 1
  );

  const transition = mix(isActive, 0, 1);

  const bgColor = mixColor(
    transition,
    processColor('#fff'),
    processColor('#F9A826'),
    'RGB'
  );
  const borderColor = mixColor(
    transition,
    processColor('#F9A826'),
    processColor('#fff'),
    'RGB'
  );

  const dotStyle = useAnimatedStyle(() => ({
    width: withSpring(
      Math.round(translateX.value / PAGE_WIDTH) !== data.length - 1
        ? 64
        : CIRCLE_WIDTH,
      { duration: 1000 }
    ),
  }));

  const textStyle = useAnimatedStyle(() => {
    return {
      fontSize: withSpring(
        Math.round(translateX.value / PAGE_WIDTH) !== data.length - 1 ? 18 : 24,
        { duration: 1000 }
      ),
    };
  });

  const text = useDerivedValue(() =>
    Math.round(translateX.value / PAGE_WIDTH) !== data.length - 1
      ? 'Next'
      : 'Start'
  );

  const onPress = (event: NativeSyntheticEvent<NativeTouchEvent>) => {
    event.preventDefault();
    onPressIn?.(event);
  };
  return (
    <Animated.View
      style={[styles.dot, dotStyle, { backgroundColor: bgColor, borderColor }]}
    >
      <ReText
        text={text}
        style={[textStyle, { color: borderColor }]}
        onPressIn={onPress}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 64,
    width: 64,
    borderRadius: 32,
    color: 'white',
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
