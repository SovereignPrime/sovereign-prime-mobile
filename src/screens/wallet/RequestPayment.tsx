import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// * custom components
import { WalletHeader } from '@components/atoms/header/headers';
import WalletIDBox from '@components/atoms/wallet/IDBox';
import { InputWithIcon, MultilineInput } from '@components/atoms/inputs/inputs';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import DownIcon from '@svg/down2.svg';
import DollarIcon from '@svg/dollar.svg';

const RequestPaymentScreen = ({ onBack }: { onBack: () => void }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <WalletHeader title={'Request Payment'} onBack={onBack} />
      <WalletIDBox
        walletID={`0x3558281`}
        additionalStyle={styles.walletIDBox}
      />
      <View style={styles.form}>
        <Text style={styles.inputLabel}>Name</Text>
        <InputWithIcon
          placeholder="Enter recipient name"
          additionalStyle={{}}
          RightIcon={DownIcon}
        />
        <Text style={[styles.inputLabel, styles.formSpace]}>Amount</Text>
        <InputWithIcon
          placeholder="Enter amount"
          additionalStyle={styles.formSpace}
          RightIcon={DollarIcon}
        />
        <Text style={[styles.inputLabel, styles.formSpace]}>Note</Text>
        <MultilineInput
          placeholder="Enter note here"
          additionalStyle={styles.formSpace}
        />
      </View>
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.8}
        style={styles.requestBtn}>
        <Text style={styles.requestBtnText}>REQUEST PAYMENT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestPaymentScreen;

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.align.flexColCenter,
      flex: 1,
    },
    walletIDBox: {
      marginVertical: 32,
    },
    form: {
      marginTop: 40,
      paddingHorizontal: 23,
      width: '100%',
    },
    inputLabel: {
      ...theme.font.label2Light,
      color: theme.color.primary,
    },
    formSpace: {
      marginTop: 16,
    },
    requestBtn: {
      ...theme.align.flexCenter,
      marginTop: 32,
      width: 195,
      height: 48,
      borderRadius: 5,
      backgroundColor: theme.color.primary,
    },
    requestBtnText: {
      ...theme.font.normalMedium,
      color: theme.color.secondary,
    },
  });
};
