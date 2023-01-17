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
 * @param {string} descText
 * @param {string} yesText
 * @param {string} noText
 * @param {function} onYes
 * @param {function} onNo
 * @param {function} close
 * @returns
 */
const ModalAddToGroup = ({
  isOpen,
  title,
  yesText,
  noText,
  onSend,
  onCancel,
  close,
}: {
  isOpen: boolean;
  title: string;
  yesText: string;
  noText: string;
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
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.groupName}>Group Name</Text>
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
          <Text style={styles.btnText}>{noText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onSend('');
          }}
          activeOpacity={0.8}
          style={[styles.btn, styles.btnSpace]}>
          <Text style={styles.btnText}>{yesText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalAddToGroup;

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
      ...theme.font.normal,
      color: theme.color.primary,
    },
    groupName: {
      ...theme.font.normalBold,
      marginTop: 32,
      color: theme.color.primary,
    },
    textInput: {
      marginTop: 16,
      marginBottom: 41,
      paddingHorizontal: 15,
      paddingVertical: 12,
      height: 61,
      borderRadius: 10,
      backgroundColor: theme.color.backgroundPrimary,
    },
    btnRow: {
      ...theme.align.flexRowBetween,
    },
    btn: {
      ...theme.align.flexColCenter,
      flex: 1,
      paddingVertical: 9,
      //   paddingHorizontal: 14,
      borderWidth: 3,
      borderColor: theme.color.borderPrimary,
    },
    btnSpace: {
      marginLeft: 34,
    },
    btnText: {
      ...theme.font.labelMedium,
      color: theme.color.primary,
    },
  });
};
