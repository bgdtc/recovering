import { styles } from '../constants/Styles';
import { View,Text, ScrollView } from 'react-native';
import { useState } from 'react';
import { FIND_STATEMENT_VALUES } from '../queries';
import { useQuery } from '@apollo/client';
import { Loading } from '../components/atoms/Loading';
import { Texts,Images, Buttons } from '../components/atoms';

function StatementScreen() {
  const mobileStatementLabels = ["Mois","Contrat","TJM Consultant","Nb de jours facturés","Chiffre d'affaires","Compte de réserve brut","Salaire versé"]
  const actualYear = new Date().getFullYear();
  const [year, setYear] = useState(actualYear);
  const { data } = useQuery(FIND_STATEMENT_VALUES,{variables:{sortOrder:"ASC",sortField:"date",year:year}});

  if (!data) return (<View style={styles.dashboardContainer}><Loading /></View>);
  let myData = data?.findStatementValues?.items

  return (
    <ScrollView>
    <View style={styles.payslipContainer}>
      <Images.HeaderImage />
      <View style={styles.separator} />
      <Texts.GenericTitle title="Mes Décomptes" />
      <View style={styles.flex_col}>
      <View style={styles.flex_row}>
        <Buttons.YearButton title={actualYear} active={year === actualYear ? true : false} onPress={() => setYear(actualYear)} />
        <Buttons.YearButton title={actualYear-1} active={year === actualYear-1 ? true : false} onPress={() => setYear(actualYear-1)} />
        <Buttons.YearButton title={actualYear-2} active={year === actualYear-2 ? true : false} onPress={() => setYear(actualYear-2)} />
      </View>
        {myData.map((statement:any,index:number) =>
          <View key={index} style={[styles.pb20_textCenter,styles.statementCard]}>
            <View style={[styles.statementTitles,styles.flex_col]}>
                  <Text style={[styles.title,styles.textaCenter]}>Décompte pour {statement.period}</Text>
            </View>
            <View style={[styles.flex_row,styles.around]}>
                <View>
                  {mobileStatementLabels.map((label:string,i:number) =>
                      <View key={"labels"+i} style={[styles.flex_col]}><Text style={i%2 == 0 ? styles.pair : styles.impair}>{label}</Text><View style={styles.statementSeparator} /></View>
                  )}
                </View>
                <View style={styles.pb20}>
                    {[statement.period,statement.contractName,statement.contractRate,statement.workedDay,statement.periodTurnover,statement.baseAccount,statement.salary]
                    .map((v,i) => <View key={"i"+i}><Text style={i%2 == 0 ? styles.pair : styles.impair}>{v}{i === 0 || i === 1 || i === 3 ? "" : "€"}</Text><View style={styles.statementSeparator} /></View>)}
                </View>
            </View>
          </View>
        )}
      </View>
    </View>
    </ScrollView>
  );
}

export default StatementScreen;