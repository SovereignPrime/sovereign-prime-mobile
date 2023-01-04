import { StyleSheet, Text, View } from 'react-native';
// * components
import { WalletHeader } from '@components/atoms/header/headers';
import { PinInput } from '@components/atoms/pinInput';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';

const ConfirmPaymentScreen = ({ onBack }: { onBack: () => void }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <WalletHeader title={'Confrim Payment Details'} onBack={onBack} />
      <View style={styles.contentContainer}>
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
            <Text style={[styles.label2]}>Transaction fee:</Text>
            <Text style={[styles.value]}>{`$10.00`}</Text>
          </View>
        </View>
        <View style={styles.descriptionRow}>
          <Text style={styles.descriptionLabel}>Description</Text>
          <Text style={styles.descriptionValue}>Thanks</Text>
        </View>
        <PinInput additionalStyle={styles.pinInput} />
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
    contentContainer: {
      ...theme.align.flexColCenter,
      paddingHorizontal: 24,
      width: '100%',
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
      marginLeft: 8,
      color: theme.color.primary,
    },
    spacingLabel: {
      marginTop: 16,
    },
    userInfoContainer: {
      marginTop: 32,
      paddingHorizontal: 27,
      paddingVertical: 13,
      width: '100%',
      backgroundColor: theme.color.background04,
    },
    userInfoRow: {
      ...theme.align.flexRowBetween,
    },
    userInfoRowSpacing: {
      marginTop: 20,
    },
    descriptionRow: {
      ...theme.align.flexRowBetween,
      marginTop: 24,
      width: '100%',
    },
    descriptionLabel: {
      ...theme.font.labelMedium,
      color: theme.color.primary,
    },
    descriptionValue: {
      ...theme.font.labelLight,
      color: theme.color.font02,
    },
    pinInput: {
      marginTop: 32,
    },
  });
};
