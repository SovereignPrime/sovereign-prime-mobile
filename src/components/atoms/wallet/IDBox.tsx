import { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import CopyIcon from '@svg/copy.svg';

const WalletIDBox = ({
  walletID,
  additionalStyle,
}: {
  walletID: string;
  additionalStyle: ViewStyle;
}) => {
  // * copy the wallet ID to clipboard
  const onCopy = useCallback((currentWalletID: string) => {
    Clipboard.setString(currentWalletID);
  }, []);

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={[styles.container, additionalStyle]}>
      <Text style={styles.walletLabel}>Wallet ID:</Text>
      <Text numberOfLines={1} style={styles.walletID}>
        {`${walletID.slice(0, 5)}${'*'.repeat(walletID.length - 5)}`}
      </Text>
      <TouchableOpacity
        onPress={() => {
          onCopy(walletID);
        }}
        activeOpacity={0.8}
        style={styles.copyBtn}>
        <CopyIcon />
      </TouchableOpacity>
    </View>
  );
};

export default WalletIDBox;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.align.flexRowCenter,
    },
    walletLabel: {
      ...theme.font.caption3Medium,
      color: theme.color.tertiary,
    },
    walletID: {
      ...theme.font.normal1Medium,
      marginLeft: 2,
      color: theme.color.font02,
    },
    copyBtn: {
      ...theme.align.flexCenter,
      marginLeft: 12,
      width: 38,
      height: 38,
      borderRadius: 19,
      backgroundColor: theme.color.borderPrimary,
    },
  });
};
