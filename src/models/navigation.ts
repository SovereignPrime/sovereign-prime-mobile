import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthStackParamList = {
  Signin: undefined;
  Signup: undefined;
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

export type { AuthStackParamList, SigninProps, SignupProps };
