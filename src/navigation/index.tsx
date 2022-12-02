import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
// * components
import AuthNavigation from './auth';
import HomeNavigation from './home';

const Route = () => {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Auth" component={AuthNavigation} />
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

export default Route;

const Home = () => {
  return <Text>Home</Text>;
};
