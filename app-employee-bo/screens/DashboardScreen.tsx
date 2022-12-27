import { styles } from '../constants/Styles';
import { View } from 'react-native';
import { useAuth } from '../contexts/Auth';
import { FontAwesome } from '@expo/vector-icons';
import { DashboardOrganism } from '../components/organisms';
function DashboardScreen() {

  const auth = useAuth();
  const onLogout = async() => { auth.signOut() };
  
  return (
    <View style={styles.dashboardContainer}>
      <DashboardOrganism />
      <View style={styles.separator} />
      <FontAwesome.Button onPress={() => onLogout()} backgroundColor={"rgb(250,16,105)"} name="arrow-circle-left">Déconnexion</FontAwesome.Button>
    </View>
  );
}

export default DashboardScreen;