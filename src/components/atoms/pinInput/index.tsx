import { useState } from 'react';
import {
  ViewStyle,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// * components
import PinInputModal from './PinInputModal';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import LockIcon from '@svg/lock.svg';

/**
 *
 * @param {ViewStyle} param0
 * @returns
 */
const PinInput = ({ additionalStyle }: { additionalStyle: ViewStyle }) => {
  const [pinModal, setPinModal] = useState(false);

  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      <View style={[styles.container, additionalStyle]}>
        <View style={styles.pinDescriptionRow}>
          <LockIcon width={16} height={16} />
          <Text style={styles.pinDescriptionText}>
            Tap to enter your transaction PIN
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setPinModal(true);
          }}
          activeOpacity={0.8}
          style={styles.pinBox}>
          {[0, 1, 2, 3].map(i => (
            <View style={styles.pinCharacter} key={`pin-character-${i}`} />
          ))}
        </TouchableOpacity>
      </View>
      <PinInputModal
        isOpen={pinModal}
        close={() => {
          setPinModal(false);
        }}
      />
    </>
  );
};

export { PinInput };

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.align.flexColCenter,
    },
    pinDescriptionRow: {
      ...theme.align.flexRow,
    },
    pinDescriptionText: {
      ...theme.font.label2Light,
      marginLeft: 12,
      color: theme.color.primary,
    },
    pinBox: {
      ...theme.align.flexXCenter,
      marginTop: 20,
      paddingHorizontal: 6,
      paddingVertical: 13,
      backgroundColor: theme.color.background04,
    },
    pinCharacter: {
      marginHorizontal: 8,
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: theme.color.tertiary,
    },
  });
};
