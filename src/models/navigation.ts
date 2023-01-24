import { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * Auth Navigation
 */
type AuthStackParamList = {
  Signin: undefined;
  Signup: NavigatorScreenParams<SignupStackParamList>;
};

/**
 * App Navigation
 */
type AppStackParamList = {
  Home: undefined;
  Market: undefined;
  Wallet: undefined;
  Users: undefined;
  Profile: undefined;
  Verification: undefined;
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
  UploadMethod: {
    parentNavigation: any;
  };
  VideoRecord: {
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

type VerificationProps = NativeStackScreenProps<
  AppStackParamList,
  'Verification',
  'AppStack'
>;

type ProfileProps = NativeStackScreenProps<
  AppStackParamList,
  'Profile',
  'AppStack'
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
  // * app navigation
  AppStackParamList,
  VerificationProps,
  ProfileProps,
};
