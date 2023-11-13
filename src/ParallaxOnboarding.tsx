import React, { useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import type { ParallaxOnboardingProps } from './types';
import { PAGE_WIDTH } from './constants';
import Page from './components/Page';
import Button from './components/Button';

const ParallaxOnboarding = ({
  data,
  onEnd,
  backgroundColor = '#F9A826',
  headerTextStyle,
  hideDot,
}: ParallaxOnboardingProps) => {
  const scrollRef = useAnimatedRef<ScrollView>();
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const onIconPress = useCallback(() => {
    const activeIndex = Math.round(translateX.value / PAGE_WIDTH);
    if (activeIndex === data.length - 1) onEnd();
    else scrollRef.current?.scrollTo({ x: PAGE_WIDTH * (activeIndex + 1) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.headers, { backgroundColor }]} />
      <View style={styles.headerTextContainer}>
        <TouchableOpacity onPress={() => onEnd()}>
          <Text style={[styles.headerText, headerTextStyle]}>Skip</Text>
        </TouchableOpacity>
      </View>

      <Animated.ScrollView
        ref={scrollRef as any}
        style={styles.scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {data.map((page, index) => (
          <Page
            key={index.toString()}
            {...{ page, index, translateX, data, hideDot }}
          />
        ))}
      </Animated.ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={onIconPress}>
          <Button {...{ translateX, data, onPressIn: onIconPress }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headers: {
    position: 'absolute',
    width: PAGE_WIDTH * 2,
    height: PAGE_WIDTH * 2,
    top: -PAGE_WIDTH * 1.4,
    left: '50%',
    marginLeft: (-PAGE_WIDTH * 2) / 2,
    borderRadius: PAGE_WIDTH,
    backgroundColor: '#F9A826',
  },
  headerTextContainer: {
    position: 'absolute',
    top: 32,
    right: 32,
  },
  headerText: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1.7,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  footer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
});

export default ParallaxOnboarding;
