import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import type { PageInterface } from '../types';
import { PAGE_WIDTH, PAGE_HEIGHT, CIRCLE_WIDTH } from '../constants';
import Dot from './Dot';

interface PageProps {
  page: PageInterface;
  translateX: SharedValue<number>;
  index: number;
  data: PageInterface[];
  hideDot?: boolean;
}

const Page: React.FC<PageProps> = ({
  page,
  translateX,
  index,
  data,
  hideDot,
}) => {
  const inputRange = [
    (index - 1) * PAGE_WIDTH,
    index * PAGE_WIDTH,
    (index + 1) * PAGE_WIDTH,
  ];

  const rImageStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0.3, 1, 0.3],
      Extrapolate.CLAMP
    );
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [0, -CIRCLE_WIDTH * 0.2, 0],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0.7, 1, 0.7],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ scale }, { translateY }],
    };
  });

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / PAGE_WIDTH);
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.Image
          source={page.source}
          style={[styles.image, rImageStyle]}
          resizeMode={'contain'}
        />

        {!hideDot && (
          <View style={styles.fillCenter}>
            {data.map((_, indexData) => {
              return (
                <Dot
                  key={indexData.toString()}
                  index={indexData}
                  activeDotIndex={activeIndex}
                />
              );
            })}
          </View>
        )}
      </View>

      <Text style={styles.title}>{page.title}</Text>
      {page.description && (
        <Text style={styles.description}>{page.description}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
  },
  imageContainer: {
    width: PAGE_WIDTH,
    height: PAGE_WIDTH,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: PAGE_HEIGHT * 0.1,
  },
  image: {
    maxHeight: PAGE_WIDTH / 2,
    maxWidth: PAGE_WIDTH / 2,
    aspectRatio: 1,
  },
  fillCenter: {
    width: PAGE_WIDTH,
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 15,
  },
  description: { textAlign: 'center', fontSize: 18, color: 'grey' },
});

export { PAGE_WIDTH };

export default Page;
