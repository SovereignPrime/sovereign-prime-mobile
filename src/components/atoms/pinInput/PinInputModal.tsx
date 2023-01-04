import { useCallback, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import LockIcon from '@svg/lock.svg';

const CODE_LENGTH = 4;
const codeDigitsArray = [1, 2, 3, 4];
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

/**
 *
 * @param {boolean} isOpen
 * @param {() => void} close
 * @returns
 */
const PinInputModal = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  const [code, setCode] = useState('');
  const ref = useRef<TextInput>(null);
  const [containerIsFocused, setContainerIsFocused] = useState(false);

  const handleOnPress = useCallback(() => {
    setContainerIsFocused(true);
    ref?.current?.focus();
  }, []);

  const handleOnBlur = useCallback(() => {
    setContainerIsFocused(false);
  }, []);

  const insets = useSafeAreaInsets();
  const styles = useThemeAwareObject(createStyles);
  const toDigitInput = useCallback(
    (_value: any, index: number) => {
      const emptyInputChar = ' ';
      const digit = code[index] || emptyInputChar;

      const isCurrentDigit = index === code.length;
      const isLastDigit = index === CODE_LENGTH - 1;
      const isCodeFull = code.length === CODE_LENGTH;

      const isFocused = isCurrentDigit || (isLastDigit && isCodeFull);

      return (
        <View
          key={index}
          style={[styles.pinCharBox, isFocused ? styles.activePinCharBox : {}]}>
          <Text style={styles.pinCharText}>{digit}</Text>
        </View>
      );
    },
    [styles, code],
  );

  return (
    <Modal
      coverScreen={true}
      isVisible={isOpen}
      backdropOpacity={0}
      onBackdropPress={close}
      style={{ margin: 0 }}>
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,
          },
        ]}>
        <View style={styles.pinDescriptionRow}>
          <LockIcon width={16} height={16} />
          <Text style={styles.pinDescriptionText}>Transaction PIN</Text>
        </View>
        <SafeAreaView style={styles.inputContainer}>
          <Pressable onPress={handleOnPress} style={styles.pinBox}>
            {codeDigitsArray.map(toDigitInput)}
          </Pressable>
          <TextInput
            ref={ref}
            value={code}
            onChangeText={setCode}
            onSubmitEditing={handleOnBlur}
            keyboardType="number-pad"
            returnKeyType="done"
            textContentType="oneTimeCode"
            maxLength={4}
            style={styles.hiddenInput}
          />
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default PinInputModal;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    modal: {
      margin: 0,
      flex: 1,
      backgroundColor: theme.color.background01,
    },
    container: {
      ...theme.align.flexColCenter,
      width: deviceWidth,
      height: deviceHeight,
      backgroundColor: theme.color.background01,
    },
    inputContainer: { flex: 1 },
    pinDescriptionRow: {
      ...theme.align.flexRowCenter,
      marginTop: 50,
    },
    pinDescriptionText: {
      ...theme.font.label1,
      marginLeft: 12,
      color: theme.color.primary,
    },
    pinBox: {
      ...theme.align.flexXCenter,
      marginTop: 20,
      paddingHorizontal: 6,
      paddingVertical: 13,
      width: 156,
      height: 46,
      backgroundColor: theme.color.background04,
    },
    pinCharBox: {
      flex: 1,
    },
    activePinCharBox: {},
    pinCharText: {
      ...theme.font.labelMedium,
      textAlign: 'center',
      color: theme.color.primary,
    },
    hiddenInput: {
      position: 'absolute',
      height: 0,
      width: 0,
    },
  });
};
