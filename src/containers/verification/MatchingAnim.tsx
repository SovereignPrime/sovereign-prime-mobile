import { useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  FadeIn,
  withRepeat,
  useSharedValue,
  Easing,
  runOnJS,
  useDerivedValue,
  useAnimatedProps,
  withSequence,
} from 'react-native-reanimated';
import AnimateableText from 'react-native-animateable-text';
// * render options
import { AvatarPosList } from '@utils/renderOptions';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

const MatchingAnim = ({
  isStart,
  onFinish,
}: {
  isStart: boolean;
  onFinish: () => void;
}) => {
  const [animStep, setAnimStep] = useState(0);

  const handlerScale01 = useSharedValue(0);
  const handlerScale02 = useSharedValue(0);
  const handlerScale03 = useSharedValue(0);
  const handlerScale04 = useSharedValue(0);
  const handlerScale05 = useSharedValue(0);
  const handlerScale06 = useSharedValue(0);
  const handlerScale07 = useSharedValue(0);

  const textHandlerScale = useSharedValue(0);

  useEffect(() => {
    if (isStart) {
      handlerScale01.value = 0;
      handlerScale02.value = 0;
      handlerScale03.value = 0;
      handlerScale04.value = 0;
      handlerScale05.value = 0;
      handlerScale06.value = 0;
      handlerScale07.value = 0;
      setAnimStep(1);
    } else {
      setAnimStep(0);
      0;
    }
  }, [isStart]);
  const setStep2 = useCallback(() => setAnimStep(2), []);
  const setStep3 = useCallback(() => setAnimStep(3), []);
  const setStep4 = useCallback(() => setAnimStep(4), []);
  const setStep5 = useCallback(() => setAnimStep(5), []);
  const setStep6 = useCallback(() => setAnimStep(6), []);
  const setStep7 = useCallback(() => setAnimStep(7), []);
  const setStep8 = useCallback(() => setAnimStep(8), []);
  useEffect(() => {
    if (animStep === 1) {
      handlerScale01.value = withRepeat(
        withTiming(1, {
          duration: 900,
        }),
        1,
        false,
        finished => {
          if (finished) {
            runOnJS(setStep2)();
          }
        },
      );
    } else if (animStep === 2) {
      handlerScale02.value = withRepeat(
        withTiming(1, {
          duration: 900,
        }),
        1,
        false,
        finished => {
          if (finished) {
            runOnJS(setStep3)();
          }
        },
      );
    } else if (animStep === 3) {
      handlerScale03.value = withRepeat(
        withTiming(1, {
          duration: 900,
        }),
        1,
        false,
        finished => {
          if (finished) {
            runOnJS(setStep4)();
          }
        },
      );
    } else if (animStep === 4) {
      handlerScale04.value = withRepeat(
        withTiming(1, {
          duration: 900,
        }),
        1,
        false,
        finished => {
          if (finished) {
            runOnJS(setStep5)();
          }
        },
      );
    } else if (animStep === 5) {
      handlerScale05.value = withRepeat(
        withTiming(1, {
          duration: 900,
        }),
        1,
        false,
        finished => {
          if (finished) {
            runOnJS(setStep6)();
          }
        },
      );
    } else if (animStep === 6) {
      handlerScale06.value = withRepeat(
        withTiming(1, {
          duration: 900,
        }),
        1,
        false,
        finished => {
          if (finished) {
            runOnJS(setStep7)();
          }
        },
      );
    } else if (animStep === 7) {
      handlerScale07.value = withRepeat(
        withTiming(1, {
          duration: 900,
        }),
        1,
        false,
        finished => {
          if (finished) {
            runOnJS(setStep8)();
          }
        },
      );
    } else if (animStep === 8) {
      console.log('why is this not triggering');
      textHandlerScale.value = withRepeat(
        withTiming(3, { duration: 2500 }),
        // withSequence(withTiming(0, { duration: 2500 })),
        -1,
        true,
      );
    }
  }, [animStep]);

  const animatedStyle01 = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      ...getNthPosition(0),
      borderRadius: Math.round(AvatarPosList[0].width / 2),
      transform: [
        {
          scale: handlerScale01.value,
        },
      ],
    };
  });
  const animatedStyle02 = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      ...getNthPosition(1),
      borderRadius: Math.round(AvatarPosList[1].width / 2),
      transform: [
        {
          scale: handlerScale02.value,
        },
      ],
    };
  });
  const animatedStyle03 = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      ...getNthPosition(2),
      borderRadius: Math.round(AvatarPosList[2].width / 2),
      transform: [
        {
          scale: handlerScale03.value,
        },
      ],
    };
  });
  const animatedStyle04 = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      ...getNthPosition(3),
      borderRadius: Math.round(AvatarPosList[3].width / 2),
      transform: [
        {
          scale: handlerScale04.value,
        },
      ],
    };
  });
  const animatedStyle05 = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      ...getNthPosition(4),
      borderRadius: Math.round(AvatarPosList[4].width / 2),
      transform: [
        {
          scale: handlerScale05.value,
        },
      ],
    };
  });
  const animatedStyle06 = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      ...getNthPosition(5),
      borderRadius: Math.round(AvatarPosList[5].width / 2),
      transform: [
        {
          scale: handlerScale06.value,
        },
      ],
    };
  });
  const animatedStyle07 = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      ...getNthPosition(6),
      borderRadius: Math.round(AvatarPosList[6].width / 2),
      transform: [
        {
          scale: handlerScale07.value,
        },
      ],
    };
  });
  const animatedText = useDerivedValue(() => {
    // return `Matching${textHandlerScale.value}`;
    return `Matching${
      textHandlerScale.value > 0.7
        ? '...'
        : textHandlerScale.value > 0.4
        ? '..'
        : '.'
    }`;
  }, []);
  // ! not working
  const animatedProps = useAnimatedProps(() => {
    return {
      text: animatedText.value,
    };
  });

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      {AvatarPosList.map((item, index) => (
        <Animated.View
          style={
            index === 0
              ? animatedStyle01
              : index === 1
              ? animatedStyle02
              : index === 2
              ? animatedStyle03
              : index === 3
              ? animatedStyle04
              : index === 4
              ? animatedStyle05
              : index === 5
              ? animatedStyle06
              : animatedStyle07
          }
          entering={FadeIn}
          key={`animated-avatar-${index}`}>
          <Image
            source={item.image}
            style={{
              width: item.width,
              height: item.height,
              borderRadius: Math.round(item.width / 2),
            }}
          />
        </Animated.View>
      ))}
      {animStep === 8 ? (
        <AnimateableText animatedProps={animatedProps} style={styles.text} />
      ) : null}
    </View>
  );
};

export default MatchingAnim;

const getNthPosition = (index: number) => ({
  left:
    isString(AvatarPosList[index].x) || AvatarPosList[index].x > 0
      ? AvatarPosList[index].x
      : undefined,
  right:
    isString(AvatarPosList[index].x) || AvatarPosList[index].x > 0
      ? undefined
      : -AvatarPosList[index].x,
  top:
    isString(AvatarPosList[index].y) || AvatarPosList[index].y > 0
      ? AvatarPosList[index].y
      : undefined,
  bottom:
    isString(AvatarPosList[index].y) || AvatarPosList[index].y > 0
      ? undefined
      : -AvatarPosList[index].y,
});

const isString = (value: number | string) => {
  return value.toString() === value;
};

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      ...theme.font.big,
      position: 'absolute',
      top: '48%',
      left: '20%',
      color: theme.color.background03,
    },
  });
};
