import { useCallback } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useForm } from 'react-hook-form';
// * custom components
import { LabelInputWithControl } from '@components/atoms/inputs/inputs';
// * styles
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { Theme } from '@theme/Theme.interface';
// * assets
import LogoImage from '@image/logo.jpeg';
import { SigninProps } from '@models/navigation';

const SignIn = (props: SigninProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = useCallback((data: any) => {
    console.log('submitting---', data);
  }, []);
  const goSignUp = useCallback(() => {
    props.navigation.navigate('Signup', {
      screen: 'Basic',
      params: {
        parentNavigation: props.navigation,
      },
    });
  }, [props]);

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Image source={LogoImage} style={styles.logoImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Log In</Text>
        <LabelInputWithControl
          control={control}
          name={'email'}
          rules={{
            required: true,
          }}
          placeholder="Your email here"
          label="Email"
        />
        <LabelInputWithControl
          control={control}
          name={'password'}
          rules={{
            required: true,
          }}
          placeholder="*****"
          label="Password"
          isSecure={true}
          className={styles.mt_5}
        />
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          activeOpacity={0.8}
          style={styles.btnLogin}>
          <Text style={styles.btnLoginText}>Log In</Text>
        </TouchableOpacity>
        <View style={[styles.goSignUpRow]}>
          <Text style={styles.descText}>New user? </Text>
          <TouchableOpacity onPress={goSignUp} activeOpacity={0.9} style={{}}>
            <Text style={styles.goSignUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

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
    btnLogin: {
      ...theme.spacing.button,
      ...theme.box.button,
      ...theme.align.flexCenter,
      marginTop: 27,
      width: 226,
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
    mt_5: {
      marginTop: 5,
    },
  });
};
