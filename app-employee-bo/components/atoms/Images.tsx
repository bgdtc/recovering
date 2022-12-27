import { View,Image } from "react-native";
import { styles } from "../../constants/Styles";

export const HeaderImage = () => (
    <View style={[styles.backgroundPrimary,styles.dashboardImagePosition]}>
        <Image style={styles.dashboardImage} source={require('../../assets/images/logo-white.png')} />
      </View>
);