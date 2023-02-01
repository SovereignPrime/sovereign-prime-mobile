import { SafeAreaView, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MenuProvider } from 'react-native-popup-menu';
// * components
import HomeScreen from '@screens/home';
import MarketScreen from '@screens/market';
import WalletScreen from '@screens/wallet';
import UsersScreen from '@screens/users';
import ProfileScreen from '@screens/profile';
import VerificationScreen from '@screens/verification';
// * types
import { AppStackParamList } from '@models/navigation';
// * assets
import HomeIcon from '@svg/home.svg';
import CartIcon from '@svg/cart.svg';
import WalletIcon from '@svg/wallet.svg';
import UsersIcon from '@svg/users.svg';
import ProfileIcon from '@svg/profile.svg';
// * styles
import { useTheme } from '@theme/Theme.context';

const AppStack = createBottomTabNavigator<AppStackParamList>();

const HomeNavigation = () => {
  const { theme } = useTheme();

  return (
    <MenuProvider>
      <StatusBar backgroundColor={'#000'} barStyle="dark-content" />
      <SafeAreaView />
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.color.primary,
          tabBarInactiveTintColor: theme.color.backgroundSecondary,
          tabBarStyle: {
            borderTopWidth: 2,
            borderColor: theme.color.backgroundSecondary,
          },
        }}>
        <AppStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <HomeIcon
                width={29}
                height={29}
                style={{
                  color,
                }}
              />
            ),
          }}
        />
        <AppStack.Screen
          name="Market"
          component={MarketScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <CartIcon
                width={29}
                height={29}
                style={{
                  color,
                }}
              />
            ),
          }}
        />
        <AppStack.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <WalletIcon width={29} height={29} style={{ color }} />
            ),
          }}
        />
        <AppStack.Screen
          name="Users"
          component={UsersScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <UsersIcon width={29} height={29} style={{ color }} />
            ),
          }}
        />
        <AppStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <ProfileIcon width={29} height={29} style={{ color }} />
            ),
          }}
        />
        <AppStack.Screen
          name="Verification"
          component={VerificationScreen}
          options={{
            tabBarButton: () => null,
            tabBarStyle: {
              display: 'none',
            },
            tabBarIconStyle: {
              display: 'none',
            },
          }}
        />
      </AppStack.Navigator>
    </MenuProvider>
  );
};

export default HomeNavigation;
