import { Texts,Images,Loading, Buttons } from "../atoms";
import { View,Text,Modal, TextInput, ScrollView, ImageBackground } from "react-native";
import { useContext,useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import { styles } from "../../constants/Styles";
import { GET_EMPLOYEE } from "../../queries";
import { useQuery } from "@apollo/client";
import { FontAwesome } from "@expo/vector-icons";

export const DashboardHeader = () => {
    const context = useContext(AuthContext);
    return (
        <View style={styles.dashboardHeader}>
            <Images.HeaderImage />
            <Texts.DashboardTitle firstName={context?.authData?.firstName!} />
            {/* <Texts.DashboardEmail email={context?.authData?.email!} /> */}
        </View>
    )
}

export const DashboardCards = () => {
    const employee = useQuery(GET_EMPLOYEE);
    const expenses = [{amount:200,type:"moonCard",date:"01/01/2022"},{amount:300,type:"moonCard",date:"09/01/2022"},{amount:123,type:"moonCard",date:"12/01/2022"},{amount:304,type:"moonCard",date:"17/01/2022"},{amount:401,type:"moonCard",date:"23/01/2022"}];

    return (
    <View>
        {employee.data ?
            <View style={styles.dashboardCardContainer}>
            <View style={styles.flex_col}>
                <View style={styles.dashboardCard}>
                  <FontAwesome name="bank" size={30} color="rgb(250,16,105)" />
                  <Text style={styles.textPrimary}>Cpte de réserve: </Text>
                  <Text style={styles.textPrimary}>{employee?.data?.getEmployee.statAccountAmount / 100}€</Text>
                </View>
                <View style={styles.dashboardCard}>
                <FontAwesome name="exchange" size={30} color="rgb(250,16,105)" />
                  <Text style={styles.textPrimary}>Total facturé: </Text>
                  <Text style={styles.textPrimary}>{employee?.data?.getEmployee.statGlobalBilledAmount / 100}€</Text>
                </View>
            </View>
                <View style={styles.flex_col}>
                <ScrollView>
                <View style={styles.dashboardCard}>
                <FontAwesome name="credit-card" size={30} color="rgb(250,16,105)" />
                  <Text style={styles.textPrimary}>Dernière Dépense: </Text>
                  <Text style={styles.textPrimary}>{expenses[0].type}-{expenses[0].amount}€</Text>      
                </View>
                </ScrollView>
                <View style={styles.dashboardCard}>
                <FontAwesome name="area-chart" size={30} color="rgb(250,16,105)" />
                  <Text style={styles.textPrimary}>Total facturé: </Text>
                  <Text style={styles.textPrimary}>{employee?.data?.getEmployee.statGlobalBilledAmount / 100}€</Text>
                </View>
                    
                </View>
            </View>
            : <Loading.Loading />
        }
    </View>
    )
}

// TODO: implémenter le modal formulaire cra
export const DashboardActions = () => {
    const employee = useQuery(GET_EMPLOYEE);
    const expenses = [{amount:200,type:"moonCard",date:"01/01/2022"},{amount:300,type:"moonCard",date:"09/01/2022"},{amount:123,type:"moonCard",date:"12/01/2022"},{amount:304,type:"moonCard",date:"17/01/2022"},{amount:401,type:"moonCard",date:"23/01/2022"}];
    const [isVisible, setIsVisible] = useState(false);
    const [expensesIsVisible, setExpensesIsVisible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <View style={styles.centeredView}>
                <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={() => setIsVisible(false)}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>Formulaire de dépot de Compte rendu d'activité</Text>
                            <CreateCraModalContent />
                            <Buttons.CloseModalButton onPress={() => setIsVisible(false)} title="Annuler" />
                        </View>
                    </View>
                </Modal>
                <Modal animationType="slide" transparent={true} visible={expensesIsVisible} onRequestClose={() => setExpensesIsVisible(false)}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>Mes dépenses du mois: </Text>
                            {employee.data ? expenses.map((expense:any,i:number) =>
                                <Text key={"text"+i}>{expense.type}-{expense.amount}€ | {expense.date}</Text>
                            ) : ""}
                            <Buttons.CloseModalButton onPress={() => setExpensesIsVisible(false)} title="Fermer" />
                        </View>
                    </View>
                </Modal>
            </View>
            <Buttons.ShowExpensesButton onPress={() => setExpensesIsVisible(true)} title="Voir mes dépenses" />            
            <Buttons.CreateCRAButton onPress={() => setIsVisible(true)} title="Déposer un CRA" />
        </View>
    )
}

const CreateCraModalContent = () => {
    return (
    <>      
        <TextInput style={styles.loginInput} keyboardType='email-address' value={"test"} placeholder="email@mail.com" onChangeText={username => username}/>
        <TextInput style={styles.loginInput} secureTextEntry={true} value={"test"} placeholder="*********" onChangeText={password =>password} />
        <Buttons.ValidateCRAButton  title="Valider" onPress={() => console.warn("creer le cra")} />
    </>
    )
}