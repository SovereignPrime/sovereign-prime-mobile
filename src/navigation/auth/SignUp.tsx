import { createStackNavigator } from '@react-navigation/stack';
// * custom components
import BasicSignup from '@screens/signUp/Basic';
// * types
import { SignupProps, SignupStackParamList } from '@models/navigation';
import VideoIntro from '@screens/signUp/VideoIntro';

const SignupStack = createStackNavigator<SignupStackParamList>();

const SignUpNavigation = (props: SignupProps) => {
  return (
    <SignupStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SignupStack.Screen
        name="Basic"
        component={BasicSignup}
        initialParams={{
          parentNavigation: props.navigation,
        }}
      />
      <SignupStack.Screen
        name="VideoIntro"
        component={VideoIntro}
        initialParams={{
          parentNavigation: props.navigation,
        }}
      />
    </SignupStack.Navigator>
  );
};

export default SignUpNavigation;
