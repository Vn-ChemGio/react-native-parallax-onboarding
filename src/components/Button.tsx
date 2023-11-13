import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface DotProps {
  index: number;
  activeDotIndex: Animated.SharedValue<number>;
}

const Button: React.FC<DotProps> = ({ activeDotIndex, index }) => {
  const rDotStyle = useAnimatedStyle(() => {
    const isActive = activeDotIndex.value === index;
    return {
      backgroundColor: withTiming(!isActive ? '#f5e2d2' : '#fcba51', {
        duration: 150,
      }),
    };
  });

  return (
    <Animated.View style={[styles.dot, rDotStyle]}>
      {activeDotIndex.value !== index ? (
        <Text>Next</Text>
      ) : (
        <Text>Start</Text>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 48,
    height: 48,
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});

export default Button;
