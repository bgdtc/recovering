import { styles } from '../constants/Styles';
import { View,Text,ScrollView, Alert, Platform } from 'react-native';
import { openURL } from 'expo-linking';
import { useQuery } from '@apollo/client';
import { FIND_PAYSLIPS } from '../queries';
import { Buttons, Loading } from '../components/atoms';
import { useState } from 'react';
import { HeaderImage } from '../components/atoms/Images';
import { GenericTitle } from '../components/atoms/Texts';

function PayslipScreen() {

  const actualYear = new Date().getFullYear();
  const [year,setYear] = useState(actualYear)
  const { data } = useQuery(FIND_PAYSLIPS,{variables:{sortOrder:"ASC",sortField:"date",year:year}});
  if (!data) return <Loading.Loading />
  let myData = data?.findPayslips?.items
  
  return (
  <ScrollView>
    <View style={styles.payslipContainer}>
    <HeaderImage />
    <View style={styles.separator} />
      <GenericTitle title="Mes Bulletins"/>
      <View style={styles.flex_row}>
        <Buttons.YearButton title={actualYear} active={year === actualYear ? true : false} onPress={() => setYear(actualYear)} />
        <Buttons.YearButton title={actualYear-1} active={year === actualYear-1 ? true : false} onPress={() => setYear(actualYear-1)} />
        <Buttons.YearButton title={actualYear-2} active={year === actualYear-2 ? true : false} onPress={() => setYear(actualYear-2)} />
      </View>
      {myData.map((item:any) => {
        return (
        <View key={item.id} style={styles.payslipCard}>
            <Text style={styles.textPrimary}>Bulletin du : {Platform.OS === "ios" ? new Date(item.date).toLocaleString('FR-fr',{day:'numeric',month:'numeric',year:'numeric'}) : new Date(item.date).toLocaleDateString() }</Text>
            <Buttons.DownloadButton disabled={item.mainFile.url !== null ? false : true} title='Télécharger' onPress={() => item.mainFile.url !== null ? openURL(item.mainFile.url) :Alert.alert("Pas de Fichier")} />
        </View>
        )
      }
        
      ) }
    </View>
    </ScrollView>
  );
}

export default PayslipScreen;