import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import ImageIcon from '@svg/image.svg';
import CameraIcon from '@svg/camera2.svg';

const ChatInput = () => {
  const [chatText, setChatText] = useState<string>('');

  // * event handlers
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.chatInputContainer}>
      {chatText === '' ? (
        <>
          <ImageIcon width={24} height={24} />
          <CameraIcon
            width={24}
            height={24}
            style={styles.chatInputCameraIcon}
          />
        </>
      ) : null}
      <TextInput
        value={chatText}
        multiline={true}
        onChangeText={setChatText}
        placeholder="Type things here..."
        style={styles.chatInput}
      />
      {chatText === '' ? null : (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            console.log('new text', chatText);
          }}
          //   onPress={onSend}
          style={styles.sendBtn}>
          <Text style={styles.sendBtnText}>Send</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ChatInput;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    chatInputContainer: {
      ...theme.align.flexRowCenter,
      flex: 0,
      paddingVertical: 15,
      paddingHorizontal: 19,
      backgroundColor: theme.color.secondary,
    },
    chatInputCameraIcon: {
      marginLeft: 19,
      marginRight: 17,
    },
    chatInput: {
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 10,
      // height: 40,
      borderWidth: 1,
      borderColor: theme.color.borderPrimary,
      borderRadius: 10,
    },
    sendBtn: {
      ...theme.align.flexXCenter,
      marginLeft: 8,
      width: 53,
      height: 28,
      borderRadius: 5,
      backgroundColor: theme.color.borderPrimary,
    },
    sendBtnText: {
      ...theme.font.normal,
      color: theme.color.primary,
    },
  });
};
