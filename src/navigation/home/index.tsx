import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeNavigation = () => {
  const HomeStack = createBottomTabNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Main" component={Main} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;

const Main = () => {
  return null;
};
