import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// * custom components
import { WalletHeader } from '@components/atoms/header/headers';
import WalletIDBox from '@components/atoms/wallet/IDBox';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * mockup data
import { mockupWalletNotifications } from '@utils/mockup';

const NotificationScreen = ({ onBack }: { onBack: () => void }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <WalletHeader title={'Payment'} onBack={onBack} />
      <WalletIDBox
        walletID={`0x3558281`}
        additionalStyle={styles.walletIDBox}
      />
      {/* <SectionList
        sections={mockupWalletNotifications}
        keyExtractor={(item, index) => } */}
    </View>
  );
};

export default NotificationScreen;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.align.flexColCenter,
      flex: 1,
    },
    walletIDBox: {
      marginVertical: 32,
    },
    earnKarmaContainer: {
      ...theme.align.flexRowCenter,
      paddingLeft: 53,
      paddingRight: 24,
      paddingTop: 8,
      paddingBottom: 10,
      width: '100%',
      backgroundColor: theme.color.borderPrimary,
    },
    earnKarmaContentContainer: {
      ...theme.align.flexCol,
      flex: 1,
    },
    earnKarmaContentHeader: {
      ...theme.align.flexRow,
    },
    earnKarmaTitle: {
      ...theme.font.label2,
      color: theme.color.primary,
    },
    earnKarmaNewLabel: {
      ...theme.align.flexCenter,
      marginLeft: 45,
      width: 41,
      height: 24,
      borderRadius: 3,
      backgroundColor: theme.color.font02,
    },
    earnKarmaNewText: {
      ...theme.font.caption2Light,
      color: theme.color.primary,
    },
    earnKarmaDesc: {
      ...theme.font.caption1Light,
      color: theme.color.font02,
    },
    earnKarmaStartBtn: {
      ...theme.align.flexCenter,
      width: 54,
      height: 27,
      borderRadius: 3,
      backgroundColor: theme.color.primary,
    },
    earnKarmaStartText: {
      ...theme.font.caption1Light,
      color: theme.color.secondary,
    },
    submenuList: {
      flex: 1,
      marginTop: 40,
      paddingHorizontal: 24,
      width: '100%',
    },
    submenu: {
      marginBottom: 36,
    },
  });
};
