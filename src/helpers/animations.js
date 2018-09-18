import {Animated, Dimensions} from 'react-native'
let { height } = Dimensions.get('window')

export const onSwipeUpExperience = (totalHeight, paddingBelow, bottom, fade) => {
  return Animated.parallel([
    Animated.timing(totalHeight, {
      toValue: height / 3 + 12,
      duration: 200
    }),
    Animated.timing(paddingBelow, {
      toValue: 45,
      duration: 200
    }),
    Animated.timing(bottom, {
      toValue: 0,
      duration: 200
    }),
    Animated.timing(fade, {
      toValue: 0,
      duration: 200
    })
  ]).start()
}

export const onSwipeDownExperience = (totalHeight, paddingBelow, bottom, fade) => {
  return Animated.parallel([
    Animated.timing(totalHeight, {
      toValue: height,
      duration: 200
    }),
    Animated.timing(paddingBelow, {
      toValue: 0,
      duration: 200
    }),
    Animated.timing(bottom, {
      toValue: 60,
      duration: 200
    }),
    Animated.timing(fade, {
      toValue: 1,
      duration: 200
    })
  ]).start()
}
