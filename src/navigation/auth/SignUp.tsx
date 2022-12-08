import { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useForm } from 'react-hook-form';
// * custom components
import {
  LabelInputControlWithAddon,
  LabelInputWithControl,
} from '@components/atoms/inputs/inputs';
// * styles
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { Theme } from '@theme/Theme.interface';
// * assets
import LocateSvg from '@svg/locate.svg';
import { SignupProps } from '@models/navigation';

const SignUp = (props: SignupProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      sex: 0,
      age: 0,
      location: '',
    },
  });

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);
  const goLogIn = useCallback(() => {
    props.navigation.navigate('Signin');
  }, [props]);

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Sign Up</Text>
        <LabelInputWithControl
          control={control}
          name={'firstName'}
          rules={{
            required: true,
          }}
          placeholder="First Name"
          label="First name"
        />
        <LabelInputWithControl
          control={control}
          name={'lastName'}
          rules={{
            required: true,
          }}
          label="Sex"
          className={styles.mt_15}
        />
        <View style={[styles.inputsRow, styles.mt_15]}>
          <LabelInputWithControl
            control={control}
            name={'sex'}
            rules={{
              required: true,
            }}
            label="Sex"
            className={{
              ...styles.flex1,
            }}
          />
          <LabelInputWithControl
            control={control}
            name={'age'}
            rules={{
              required: true,
            }}
            label="Age"
            className={{
              ...styles.flex1,
              ...styles.ml_20,
            }}
          />
        </View>
        <LabelInputControlWithAddon
          control={control}
          name={'Location'}
          rules={{
            required: true,
          }}
          label="location"
          addOn={<LocationAddon />}
          onAddon={() => {}}
          className={{
            ...styles.mt_15,
          }}
        />
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          activeOpacity={0.8}
          style={styles.btnLogin}>
          <Text style={styles.btnLoginText}>Next</Text>
        </TouchableOpacity>
        <View style={[styles.goSignUpRow]}>
          <Text style={styles.descText}>Already a user? </Text>
          <TouchableOpacity onPress={goLogIn} activeOpacity={0.9} style={{}}>
            <Text style={styles.goSignUpText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const LocationAddon = () => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.addon}>
      <LocateSvg width={24} height={24} style={styles.addonSvg} />
      <Text style={styles.addonText}>Locate</Text>
    </View>
  );
};

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...theme.align.flexCol,
      flex: 1,
      backgroundColor: theme.color.secondary,
    },
    logoImage: {
      flex: 0,
      width: '100%',
      height: '25%',
    },
    contentContainer: {
      ...theme.spacing.container,
      ...theme.align.flexColCenter,
      flex: 1,
    },
    titleText: {
      ...theme.font.title,
      marginBottom: 41,
      color: theme.color.primary,
    },
    inputsRow: {
      ...theme.align.flexRow,
      width: '100%',
    },
    btnLogin: {
      ...theme.spacing.button,
      ...theme.box.button,
      ...theme.align.flexCenter,
      marginTop: 27,
      width: '100%',
      backgroundColor: theme.color.primary,
    },
    btnLoginText: {
      ...theme.font.label,
      color: theme.color.secondary,
    },
    goSignUpRow: {
      ...theme.align.flexRow,
      marginTop: 3,
    },
    descText: {
      ...theme.font.desc,
      color: theme.color.primary,
    },
    goSignUpText: {
      ...theme.font.label,
      color: theme.color.primary,
    },
    mt_15: {
      marginTop: 15,
    },
    ml_20: {
      marginLeft: 20,
    },
    flex1: {
      flex: 1,
    },
    addon: {
      ...theme.align.flexColCenter,
    },
    addonSvg: {
      backgroundColor: theme.color.secondary,
      color: theme.color.primary,
    },
    addonText: {
      ...theme.font.caption,
    },
  });
};
