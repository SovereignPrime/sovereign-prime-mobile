import { StyleSheet, View } from 'react-native';
// * components
import { WalletHeader } from '@components/atoms/header/headers';
import WalletIDBox from '@components/atoms/wallet/IDBox';
import { walletTransactionsSubmenuList } from '@utils/renderOptions';
import { WalletSubmenuWithoutDesc } from '@components/atoms/wallet/Item';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

const TransactionScreen = ({
  onCompleted,
  onCanceled,
  onBack,
}: {
  onCompleted: () => void;
  onCanceled: () => void;
  onBack: () => void;
}) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <WalletHeader title="Transactions" onBack={onBack} />
      <WalletIDBox
        walletID={`0x3558281`}
        additionalStyle={styles.walletIDBox}
      />
      <View style={styles.submenuList}>
        {walletTransactionsSubmenuList.map(submenuItem => (
          <WalletSubmenuWithoutDesc
            label={submenuItem.label}
            Icon={submenuItem.icon}
            additionalStyle={styles.submenu}
            onPress={
              submenuItem.value === 'completed' ? onCompleted : onCanceled
            }
            key={`wallet-transaction-history-submenu-${submenuItem.value}`}
          />
        ))}
      </View>
    </View>
  );
};

export default TransactionScreen;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.align.flexColCenter,
      flex: 1,
      backgroundColor: theme.color.background01,
    },
    walletIDBox: {
      marginVertical: 8,
    },
    submenuList: {
      flex: 1,
      marginTop: 16,
      paddingHorizontal: 24,
      width: '100%',
    },
    submenu: {
      marginBottom: 32,
    },
  });
};
