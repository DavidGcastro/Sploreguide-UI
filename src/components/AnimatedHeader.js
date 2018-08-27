import React from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HeaderBackground = ({ animationRange }) => {
  const animateHeader = {
    transform: [
      {
        translateY: animationRange.interpolate({
          inputRange: [0, 1],
          outputRange: [0, (-2 * height) / 3]
        })
      }
    ]
  };

  return <Animated.View style={[styles.headerBackground, animateHeader]} />;
};

const AnimatedHeader = ({ animationRange }) => (
  <View style={styles.container} pointerEvents="none">
    <HeaderBackground animationRange={animationRange} />
    <Animated.View style={styles.container} pointerEvents="none" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 0,
    zIndex: 2,
    height: height,
    width: '100%',
    backgroundColor: 'transparent',

    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBackground: {
    position: 'absolute',
    flex: 0,
    height: height,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 2
  }
});

export default AnimatedHeader;
