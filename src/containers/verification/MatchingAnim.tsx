import { Image, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  FadeIn,
  withRepeat,
  useSharedValue,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
// * render options
import { AvatarPosList } from '@utils/renderOptions';

const MatchingAnim = () => {
  const handlerScale01 = useSharedValue(0);
  const handlerScale02 = useSharedValue(0);
  const handlerScale03 = useSharedValue(0);
  const handlerScale04 = useSharedValue(0);
  const handlerScale05 = useSharedValue(0);
  const handlerScale06 = useSharedValue(0);
  const handlerScale07 = useSharedValue(0);

  const animatedStyle01 = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: AvatarPosList[0].x,
      top: AvatarPosList[0].y,
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
      left: AvatarPosList[1].x,
      top: AvatarPosList[1].y,
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
      left: AvatarPosList[2].x,
      top: AvatarPosList[2].y,
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
      left: AvatarPosList[3].x,
      top: AvatarPosList[3].y,
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
      left: AvatarPosList[4].x,
      top: AvatarPosList[4].y,
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
      left: AvatarPosList[5].x,
      top: AvatarPosList[5].y,
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
      left: AvatarPosList[6].x,
      top: AvatarPosList[6].y,
      transform: [
        {
          scale: handlerScale07.value,
        },
      ],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={animatedStyle01} entering={FadeIn}>
        {/* <Image source={} style={} /> */}
      </Animated.View>
    </View>
  );
};

export default MatchingAnim;
