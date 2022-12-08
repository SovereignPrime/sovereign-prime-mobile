import { NavigationContainer } from '@react-navigation/native';
// * hooks
import { useAuth } from '@theme/Auth';
// * components
import AuthNavigation from './auth';
import AppNavigation from './app';

const Route = () => {
  const { authData, loading } = useAuth();

  return (
    <NavigationContainer>
      {authData?.token ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Route;
