import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

/**
 * @param {boolean} isOpen
 * @param {string} title
 * @param {string} sendText
 * @param {string} cancelText
 * @param {function} onSend
 * @param {function} onCancel
 * @param {function} close
 * @returns
 */
const ModalMessageBox = ({
  isOpen,
  title,
  sendText,
  cancelText,
  onSend,
  onCancel,
  close,
}: {
  isOpen: boolean;
  title: string;
  sendText: string;
  cancelText: string;
  onSend: (newMessage: string) => void;
  onCancel: () => void;
  close: () => void;
}) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <Modal
      isVisible={isOpen}
      backdropOpacity={0.7}
      onBackdropPress={close}
      style={styles.modal}>
      <Text numberOfLines={1} style={styles.titleText}>
        {title}
      </Text>
      <TextInput
        multiline={true}
        placeholder="Type message..."
        style={styles.textInput}
      />
      <View style={styles.btnRow}>
        <TouchableOpacity
          onPress={onCancel}
          activeOpacity={0.8}
          style={styles.btn}>
          <Text style={styles.btnText}>{cancelText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onSend('');
          }}
          activeOpacity={0.8}
          style={[styles.btn]}>
          <Text style={styles.btnText}>{sendText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalMessageBox;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    modal: {
      ...theme.align.flexCol,
      flex: 0,
      marginTop: 'auto',
      marginBottom: 'auto',
      marginHorizontal: 34,
      paddingTop: 38,
      paddingBottom: 31,
      paddingHorizontal: 27,
      borderColor: theme.color.borderPrimary,
      borderWidth: 3,
      backgroundColor: theme.color.secondary,
      justifyContent: 'space-between',
    },
    titleText: {
      ...theme.font.labelMedium,
      color: theme.color.primary,
    },
    textInput: {
      marginTop: 27,
      marginBottom: 41,
      paddingHorizontal: 15,
      paddingVertical: 12,
      height: 143,
      borderRadius: 10,
      backgroundColor: theme.color.backgroundPrimary,
    },
    btnRow: {
      ...theme.align.flexRowBetween,
    },
    btn: {
      ...theme.align.flexColCenter,
      flex: 0,
      paddingVertical: 9,
      paddingHorizontal: 14,
      borderWidth: 3,
      borderColor: theme.color.borderPrimary,
    },
    btnText: {
      ...theme.font.labelMedium,
      color: theme.color.primary,
    },
  });
};
