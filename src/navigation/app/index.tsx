import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// * types
import { AppStackParamList } from '@models/navigation';

const AppStack = createBottomTabNavigator<AppStackParamList>();

const HomeNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
};

export default HomeNavigation;

const Home = () => {
  return <Text>Test home screen</Text>;
};
