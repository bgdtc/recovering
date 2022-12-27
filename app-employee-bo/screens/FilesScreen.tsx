import { View,Text, ScrollView,Switch, Alert } from 'react-native';
import { HeaderImage } from '../components/atoms/Images';
import { styles } from '../constants/Styles';
import { useQuery } from '@apollo/client';
import { FIND_FILES } from '../queries';
import { Buttons, Loading } from '../components/atoms';
import { openURL } from 'expo-linking';
import { useState } from 'react';
import { GenericTitle } from '../components/atoms/Texts';

export default function FilesScreen() {
    
    const [label,setLabel] = useState("model");
    
    const {data} = useQuery(FIND_FILES,{variables:{type: "contract"}});
    if (!data) return <Loading.Loading />
    let myData = data?.findFiles?.items;
    const handleChange = () => {
        setLabel(label === 'contract' ? 'model' : 'contract');
    }
    return (
        <ScrollView>
            <View style={styles.payslipContainer}>
            <HeaderImage />
            <View style={styles.separator} />
            {/* <View style={[styles.flex_row]}>
                <View style={[styles.flex_col,styles.p20]}>
                 <Text style={styles.switchLabel}>{label}</Text>
                 <Switch trackColor={{false:"rgb(250,16,105)"}} value={label === "modèles" ? true : false} onValueChange={() => handleChange()} />
                </View>
            </View> */}
            <GenericTitle title="Mes Documents" />
            {myData.map((item:any) => 
                <View key={item.id} style={styles.payslipCard}>
                <Text style={styles.textPrimary}>Document: {item.name}</Text>
                <Buttons.DownloadButton disabled={item.mainFile.url !== null ? false : true} title='Télécharger' onPress={() => item.mainFile.url !== null ? openURL(item.mainFile.url) :Alert.alert("Pas de Fichier")} />
                </View>
            )}
            </View>
        </ScrollView>
    )
}