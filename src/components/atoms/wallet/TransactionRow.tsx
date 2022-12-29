import { StyleSheet, Text, View } from 'react-native';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import ReceivedIcon from '@svg/received.svg';
import PayedIcon from '@svg/payment.svg';
import CanceledIcon from '@svg/canceled.svg';

const CompletedTransactionRow = ({ item }: { item: any }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.rowContainer}>
      {item.type ? (
        <PayedIcon width={50} height={50} />
      ) : (
        <ReceivedIcon width={50} height={50} />
      )}
      <View style={styles.mainSection}>
        <Text style={styles.username}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.amount}>{item.amount}</Text>
    </View>
  );
};

const CanceledTransactionRow = ({ item }: { item: any }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.rowContainer}>
      <CanceledIcon width={50} height={50} />
      <View style={styles.mainSection}>
        <Text style={styles.username}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.amount}>{item.type ? 'Payment' : 'Request'}</Text>
    </View>
  );
};

export { CompletedTransactionRow, CanceledTransactionRow };

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    rowContainer: {
      ...theme.align.flexRow,
      marginBottom: 24,
      paddingVertical: 11,
      paddingHorizontal: 24,
      width: '100%',
      borderRadius: 10,
      backgroundColor: theme.color.background04,
    },
    mainSection: {
      ...theme.align.flexCol,
      marginLeft: 24,
      flex: 1,
    },
    username: {
      ...theme.font.labelMedium,
      marginTop: 2,
      color: theme.color.primary,
    },
    date: {
      ...theme.font.caption3Medium,
      marginTop: 12,
      color: theme.color.tertiary,
    },
    amount: {
      ...theme.font.label3,
      marginTop: 12,
      color: theme.color.primary,
    },
  });
};
