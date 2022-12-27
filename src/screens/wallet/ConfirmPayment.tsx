import { StyleSheet, Text, View } from 'react-native';
// * components
import { WalletHeader } from '@components/atoms/header/headers';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

const ConfirmPaymentScreen = ({ onBack }: { onBack: () => void }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <WalletHeader title={'Confrim Payment Details'} onBack={onBack} />
      <Text style={[styles.label, styles.spacingLabel]}>To</Text>
      <Text style={[styles.value, styles.spacingLabel]}>Olumide Oyekale</Text>
      <Text style={[styles.label, styles.spacingLabel]}>Amount</Text>
      <Text style={[styles.value, styles.spacingLabel]}>{`$10.00`}</Text>
      <View style={[styles.userInfoContainer]}>
        <View style={[styles.userInfoRow]}>
          <Text style={[styles.label2]}>From:</Text>
          <Text style={[styles.value]}>Georges .L</Text>
        </View>
        <View style={[styles.userInfoRow, styles.userInfoRowSpacing]}>
          <Text style={[styles.label2]}>Wallet ID</Text>
          <Text style={[styles.value]}>{`0x4099EcAed71c49E38C9A`}</Text>
        </View>
        <View style={[styles.userInfoRow, styles.userInfoRowSpacing]}>
          <Text style={[styles.label2]}>From:</Text>
          <Text style={[styles.value]}>Georges .L</Text>
        </View>
      </View>
    </View>
  );
};

export default ConfirmPaymentScreen;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.align.flexColCenter,
    },
    label: {
      ...theme.align.desc2Light,
      color: theme.color.font02,
    },
    label2: {
      ...theme.align.desc2Light,
      color: theme.color.primary,
    },
    value: {
      ...theme.align.labelSemibold,
      color: theme.color.primary,
    },
    spacingLabel: {
      marginTop: 16,
    },
    userInfoContainer: {
      marginTop: 32,
      paddingHorizontal: 27,
      paddingVertical: 13,
      backgroundColor: theme.color.background04,
    },
    userInfoRow: {
      ...theme.align.flexRowBetween,
    },
    userInfoRowSpacing: {
      marginTop: 20,
    },
  });
};
