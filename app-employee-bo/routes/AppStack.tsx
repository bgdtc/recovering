// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DashboardScreen,PayslipScreen,StatementScreen,FilesScreen} from '../screens/';
import { FontAwesome } from '@expo/vector-icons';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{
       headerShown: false,tabBarHideOnKeyboard:true,
       tabBarInactiveTintColor:"rgb(16,23,96)",
       tabBarActiveTintColor:"rgb(250,16,105)",
       tabBarLabelStyle:{fontWeight:'bold'},
       tabBarAllowFontScaling:true,
      //  tabBarBadge:"10",
      //  tabBarBadgeStyle:{backgroundColor:'rgb(16,23,96)',color:"rgb(250,16,105)"},    
    }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen}
        options={{
          tabBarLabel:"Tableau de Bord",
          tabBarIcon: ({color}) => (<FontAwesome color={color} name="dashboard" size={25}/>)
        }} 
      />
      <Tab.Screen name="Payslip" component={PayslipScreen}
      options={{
        tabBarLabel:"Bulletins",
        tabBarIcon: ({color}) => (<FontAwesome color={color} name="euro" size={25}/>)
      }} 
      />
      <Tab.Screen name="Statement" component={StatementScreen}
      options={{
        tabBarLabel:"Décompte",
        tabBarIcon: ({color}) => (<FontAwesome color={color} name="line-chart" size={25}/>)
      }} 
      />
       <Tab.Screen name="Files" component={FilesScreen}
      options={{
        tabBarLabel:"Documents",
        tabBarIcon: ({color}) => (<FontAwesome color={color} name="file" size={25}/>)
      }} 
      />
    </Tab.Navigator>
  );
};