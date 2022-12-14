import { createStackNavigator } from '@react-navigation/stack';
// * custom components
import BasicSignup from '@screens/signUp/Basic';
import VideoIntro from '@screens/signUp/VideoIntro';
import UploadMethod from '@screens/signUp/UploadMethod';
// * types
import { SignupProps, SignupStackParamList } from '@models/navigation';
import VideoRecord from '@screens/signUp/VideoRecord';

const SignupStack = createStackNavigator<SignupStackParamList>();

const SignUpNavigation = (props: SignupProps) => {
  return (
    <SignupStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SignupStack.Group>
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
        <SignupStack.Screen
          name="VideoRecord"
          component={VideoRecord}
          initialParams={{
            parentNavigation: props.navigation,
          }}
        />
      </SignupStack.Group>
      <SignupStack.Group screenOptions={{ presentation: 'modal' }}>
        <SignupStack.Screen
          name="UploadMethod"
          component={UploadMethod}
          initialParams={{
            parentNavigation: props.navigation,
          }}
          options={{
            cardStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
      </SignupStack.Group>
    </SignupStack.Navigator>
  );
};

export default SignUpNavigation;
