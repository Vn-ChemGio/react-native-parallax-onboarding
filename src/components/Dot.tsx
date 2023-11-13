import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface DotProps {
  index: number;
  activeDotIndex: Animated.SharedValue<number>;
}

const Dot: React.FC<DotProps> = ({ activeDotIndex, index }) => {
  const rDotStyle = useAnimatedStyle(() => {
    const isActive = activeDotIndex.value === index;
    return {
      backgroundColor: withTiming(isActive ? '#fcba51' : '#f5e2d2', {
        duration: 150,
      }),
    };
  });

  return <Animated.View style={[styles.dot, rDotStyle]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    marginHorizontal: 3,
    borderRadius: 6,
  },
});

export default Dot;
