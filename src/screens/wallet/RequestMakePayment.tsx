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
import { InputWithIcon } from '@components/atoms/inputs/inputs';
import { Controller, useForm } from 'react-hook-form';
// * styles
import { Theme } from '@theme/Theme.interface';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
// * assets
import DownIcon from '@svg/down2.svg';
import DollarIcon from '@svg/dollar.svg';

/**
 *
 * @param {boolean} type - true: request, false: make
 * @returns
 */
const RequestMakePaymentScreen = ({
  type,
  onMakePayment,
  onBack,
}: {
  type: boolean;
  onMakePayment: ({
    name,
    amount,
    note,
  }: {
    name: string;
    amount: number;
    note: string;
  }) => void;
  onBack: () => void;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      amount: '',
      note: '',
    },
  });
  // * functions
  const onSubmit = (_: any) => {
    if (!type) {
      onMakePayment(_);
    }
  };

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <WalletHeader
        title={type ? 'Request Payment' : 'Make Payment'}
        onBack={onBack}
      />
      <WalletIDBox
        walletID={`0x3558281`}
        additionalStyle={styles.walletIDBox}
      />
      <View style={styles.form}>
        <Text style={[styles.inputLabel]}>{type ? 'Name' : 'To'}</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputWithIcon
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Enter recipient name"
              additionalStyle={styles.formSpace}
              RightIcon={DownIcon}
            />
          )}
          name="name"
        />
        <Text style={[styles.inputLabel, styles.formSpace]}>Amount</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputWithIcon
              value={value}
              onChange={(newValue: string) => {
                onChange(newValue.replace(/[^0-9]/g, ''));
              }}
              onBlur={onBlur}
              placeholder="Enter amount"
              additionalStyle={styles.formSpace}
              RightIcon={DollarIcon}
            />
          )}
          name="amount"
        />
        <Text style={[styles.inputLabel, styles.formSpace]}>Note</Text>
        <Controller
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              multiline={true}
              placeholder={'Enter note here'}
              style={[styles.multilineInput, styles.formSpace]}
            />
          )}
          name="note"
        />
      </View>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        activeOpacity={0.8}
        style={styles.requestBtn}>
        <Text style={styles.requestBtnText}>
          {type ? 'REQUEST PAYMENT' : 'MAKE PAYMENT'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestMakePaymentScreen;

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
    multilineInput: {
      paddingTop: 17,
      paddingBottom: 17,
      paddingHorizontal: 28,
      flex: 0,
      height: 140,
      borderWidth: 1,
      borderColor: theme.color.font02,
      color: theme.color.primary,
    },
  });
};
