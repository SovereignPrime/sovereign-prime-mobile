import { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * Auth Navigation
 */
type AuthStackParamList = {
  Signin: undefined;
  Signup: NavigatorScreenParams<SignupStackParamList>;
};

type SigninProps = NativeStackScreenProps<
  AuthStackParamList,
  'Signin',
  'AuthStack'
>;

type SignupProps = NativeStackScreenProps<
  AuthStackParamList,
  'Signup',
  'AuthStack'
>;

/**
 * Signup Navigation
 */
type SignupStackParamList = {
  Basic: {
    parentNavigation: any;
  };
  VideoIntro: {
    parentNavigation: any;
  };
};

type BasicSignupProps = NativeStackScreenProps<
  SignupStackParamList,
  'Basic',
  'SignupStack'
>;

type VideoIntroSignupProps = NativeStackScreenProps<
  SignupStackParamList,
  'VideoIntro',
  'SignupStack'
>;

export type {
  // * auth navigation
  AuthStackParamList,
  SigninProps,
  SignupProps,
  // * signup navigation
  SignupStackParamList,
  BasicSignupProps,
  VideoIntroSignupProps,
};
