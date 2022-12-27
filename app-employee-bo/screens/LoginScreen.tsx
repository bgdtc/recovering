import {useState,useCallback} from 'react';
import {View,RefreshControl,ScrollView} from 'react-native';
import {styles} from '../constants/Styles';
import { LoginFormOrganism } from '../components/organisms/';
import { LoginHeader } from '../components/molecules/LoginMolecules';
export const LoginScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {setRefreshing(false)}, 2000);
    }, []);

  return (
    <ScrollView contentContainerStyle={styles.loginContainer} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={styles.loginContainer}>
            <LoginHeader />
            <LoginFormOrganism />
        </View>
    </ScrollView>
  );
};

export default LoginScreen;