import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// * components
import SignIn from './SignIn';
import SignUp from './SignUp';
// * types
import { AuthStackParamList } from '@models/navigation';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor={'#000'} barStyle="dark-content" />
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Signin" component={SignIn} />
        <AuthStack.Screen name="Signup" component={SignUp} />
      </AuthStack.Navigator>
    </>
  );
};

export default AuthNavigation;
