import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

/**
 * @param {boolean} isOpen
 * @param {string} descText
 * @param {string} yesText
 * @param {string} noText
 * @param {function} onYes
 * @param {function} onNo
 * @param {function} close
 * @returns
 */
const ModalYesNo = ({
  isOpen,
  descText,
  yesText,
  noText,
  onYes,
  onNo,
  close,
}: {
  isOpen: boolean;
  descText: string;
  yesText: string;
  noText: string;
  onYes: () => void;
  onNo: () => void;
  close: () => void;
}) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <Modal
      isVisible={isOpen}
      backdropOpacity={0.7}
      onBackdropPress={close}
      style={styles.modal}>
      <Text style={styles.descText}>{descText}</Text>
      <View style={styles.btnRow}>
        <TouchableOpacity onPress={onNo} activeOpacity={0.8} style={styles.btn}>
          <Text style={styles.btnText}>{noText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onYes}
          activeOpacity={0.8}
          style={[styles.btn, styles.btnSpace]}>
          <Text style={styles.btnText}>{yesText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalYesNo;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    modal: {
      ...theme.align.flexCol,
      flex: 0,
      marginTop: 'auto',
      marginBottom: 'auto',
      marginHorizontal: 34,
      paddingTop: 54,
      paddingBottom: 31,
      paddingHorizontal: 27,
      height: 229,
      borderColor: theme.color.borderPrimary,
      borderWidth: 3,
      backgroundColor: theme.color.secondary,
      justifyContent: 'space-between',
    },
    descText: {
      ...theme.font.labelMedium,
      paddingHorizontal: 20,
      color: theme.color.primary,
      textAlign: 'center',
    },
    btnRow: {
      ...theme.align.flexRowBetween,
    },
    btn: {
      ...theme.align.flexColCenter,
      flex: 1,
      paddingVertical: 9,
      borderWidth: 3,
      borderColor: theme.color.borderPrimary,
    },
    btnSpace: {
      marginLeft: 37,
    },
    btnText: {
      ...theme.font.labelMedium,
      color: theme.color.primary,
    },
  });
};
