import { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

export default function ProgressBar(props) {
  const animatedProgressValue = useRef(new Animated.Value(props.min)).current;

  useEffect(() => {
    var progress = props.progress;
    if (progress > props.max) {
      progress = props.max;
    }
    Animated.timing(animatedProgressValue, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [animatedProgressValue, props, props.progress]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: props.backColor, borderColor: props.borderColor },
      ]}>
      <Animated.View
        style={[
          styles.bar,
          {
            width: animatedProgressValue.interpolate({
              inputRange: [props.min, props.max],
              outputRange: ['0%', '100%'],
            }),
            backgroundColor: props.barColor,
          },
        ]}></Animated.View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    height: 40,
    borderColor: '',
    padding: 0,
    overflow: 'hidden',
    borderRadius: 5,
    width: '100%',
  },
  bar: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderWidth: 0,
    borderRadius: 4,
  },
});