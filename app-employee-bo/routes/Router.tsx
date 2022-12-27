import {NavigationContainer} from '@react-navigation/native';
import * as Routes from '../routes';
import {useAuth} from '../contexts/Auth';
import {Loading} from '../components/atoms/Loading';

export const Router = () => {
  const {authData, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {authData ? <Routes.AppStack /> : <Routes.AuthStack />}
    </NavigationContainer>
  );
};