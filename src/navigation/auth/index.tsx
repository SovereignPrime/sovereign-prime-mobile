import { createStackNavigator } from '@react-navigation/stack';
// * components
import SignIn from './SignIn';

const AuthNavigation = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Signin" component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
