import { StyleSheet, Text, View } from 'react-native';
// * components
import { WalletHeader } from '@components/atoms/header/headers';
import WalletIDBox from '@components/atoms/wallet/IDBox';
import {
  CanceledTransactionRow,
  CompletedTransactionRow,
} from '@components/atoms/wallet/TransactionRow';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * mockup
import { mockupCompletedTransactionsList } from '@utils/mockup';

const HistoryScreen = ({
  type,
  onBack,
}: {
  type: 0 | 1;
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
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderTitle}>
          {`${type === 0 ? 'Completed' : 'Canceled'} transactions`}
        </Text>
      </View>
      <View style={styles.historyList}>
        {mockupCompletedTransactionsList.map(transaction =>
          type === 0 ? (
            <CompletedTransactionRow
              item={transaction}
              key={`transaction-type-${type}-row-${transaction.id}`}
            />
          ) : (
            <CanceledTransactionRow
              item={transaction}
              key={`transaction-type-${type}-row-${transaction.id}`}
            />
          ),
        )}
      </View>
    </View>
  );
};

export default HistoryScreen;

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
    listHeader: {
      marginTop: 31,
      paddingHorizontal: 24,
      width: '100%',
    },
    listHeaderTitle: {
      ...theme.font.labelLight,
      color: theme.color.tertiary,
    },
    historyList: {
      marginTop: 24,
      width: '100%',
    },
  });
};
