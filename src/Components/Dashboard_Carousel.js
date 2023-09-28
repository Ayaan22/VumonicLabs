import {View, Text, ScrollView, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from 'react-native-reanimated';
import {myColors} from '../Utils/Colors/myColors';

const Dashboard_Carousel = () => {
  const {width} = useWindowDimensions();
  const Size = width * 0.7;
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });
  const data = [...Array(5).keys()];
  return (
    <View>
      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={Size}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={onScroll}
        style={{}}>
        {data.map((_, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: myColors.textColor,
                width: 300,

                height: 200,
                marginRight: 15,
                borderRadius: 10,
              }}></View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default Dashboard_Carousel;
