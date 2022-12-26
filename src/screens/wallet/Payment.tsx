import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// * custom components
import { WalletHeader } from '@components/atoms/header/headers';
import WalletIDBox from '@components/atoms/wallet/IDBox';
import { walletPaymentSubmenuList } from '@utils/renderOptions';
import { WalletSubmenuWithoutDesc } from '@components/atoms/wallet/Item';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

const PaymentScreen = ({
  onBack,
  onRequestPayment,
  onMakePayment,
}: {
  onBack: () => void;
  onRequestPayment: () => void;
  onMakePayment: () => void;
}) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <WalletHeader title={'Payment'} onBack={onBack} />
      <WalletIDBox
        walletID={`0x3558281`}
        additionalStyle={styles.walletIDBox}
      />
      <View style={styles.earnKarmaContainer}>
        <View style={styles.earnKarmaContentContainer}>
          <View style={styles.earnKarmaContentHeader}>
            <Text style={styles.earnKarmaTitle}>Earn more Karma</Text>
            <View style={styles.earnKarmaNewLabel}>
              <Text style={styles.earnKarmaNewText}>NEW!</Text>
            </View>
          </View>
          <Text style={styles.earnKarmaDesc}>
            Perform some tasks to earn more karma
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.8}
          style={styles.earnKarmaStartBtn}>
          <Text style={styles.earnKarmaStartText}>START</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.submenuList}>
        {walletPaymentSubmenuList.map(submenuItem => (
          <WalletSubmenuWithoutDesc
            label={submenuItem.label}
            Icon={submenuItem.icon}
            additionalStyle={styles.submenu}
            onPress={
              submenuItem.value === 'request' ? onRequestPayment : onMakePayment
            }
            key={`wallet-payment-submenu-${submenuItem.value}`}
          />
        ))}
      </View>
    </View>
  );
};

export default PaymentScreen;

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
