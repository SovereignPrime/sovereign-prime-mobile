import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// * custom components
import ChatItem from './ChatItem';
import ChatInput from './Input';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import BackIcon from '@svg/back.svg';
import WalletIcon from '@svg/wallet.svg';
import PhoneIcon from '@svg/phone.svg';
// * mockups
import Avatar01 from '@image/mockup/avatar01.png';

const ChatDetail = ({ list, onBack }: { list: any[]; onBack: () => void }) => {
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.8} style={{}}>
          <BackIcon width={18} height={18} style={styles.headerBackIcon} />
        </TouchableOpacity>
        <Image source={Avatar01} style={styles.avatarImage} />
        <Text numberOfLines={1} style={styles.contactName}>
          {`Stackz Justin`}
        </Text>
        <TouchableOpacity style={styles.headerWallet}>
          <WalletIcon width={33} height={33} style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerCall}>
          <PhoneIcon width={33} height={33} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.chatContainer}>
        {list.map(chatItem => (
          <ChatItem {...chatItem} key={`chat-history-item-${chatItem.id}`} />
        ))}
      </View>
      <ChatInput />
    </View>
  );
};

export default ChatDetail;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    headerBar: {
      ...theme.align.flexRowCenter,
      paddingVertical: 11,
      paddingHorizontal: 20,
      backgroundColor: theme.color.secondary,
    },
    headerBackIcon: {
      color: theme.color.primary,
    },
    avatarImage: {
      marginLeft: 20,
      width: 55,
      height: 55,
      borderRadius: 28,
    },
    contactName: {
      ...theme.font.labelMedium,
      flex: 1,
      marginLeft: 13,
      color: theme.color.primary,
    },
    headerWallet: {},
    headerIcon: {
      color: theme.color.primary,
    },
    headerCall: {
      marginLeft: 20,
    },
    chatContainer: {
      flex: 1,
      backgroundColor: theme.color.background01,
    },
  });
};
