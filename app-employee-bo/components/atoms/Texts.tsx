import { Text } from "react-native"
import { styles } from "../../constants/Styles";

export const DashboardTitle =  ({firstName}:any) => (
    <Text style={styles.dashboardTitle}>Tableau de bord de {firstName!}</Text>
);

export const DashboardEmail = ({email}:any) => (
    <Text style={styles.dashboardSubtitle}>Email: {email!}</Text>
);

export const GenericTitle = ({title}: any) => (
    <Text style={styles.dashboardTitle}>{title}</Text>
)
