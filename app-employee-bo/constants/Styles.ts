import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "linear-gradient(rgb(16,23,96), rgb(255,255,255))"
    },
    loginContainer: {
      display: 'flex',
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:100,
      backgroundColor: "linear-gradient(rgb(16,23,96), rgb(255,255,255))"
    },
    dashboardContainer: {
      display: 'flex',
      paddingTop: 150,
      paddingBottom: 40,
      height:"100%",
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: "linear-gradient(rgb(16,23,96), rgb(255,255,255))"
    },
    payslipContainer: {
      display: 'flex',
      paddingTop: 50,
      paddingBottom: 60,
      height:"100%",
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: "linear-gradient(rgb(16,23,96), rgb(255,255,255))"
    },
    payslipCard: {
      display:"flex",
      justifyContent:"center",
      backgroundColor:'rgb(255,255,255)',
      width: 300,
      height: 200,
      padding: 10,
      margin: 20,
      borderRadius: 20,
    },
    statementCard: {
      display:"flex",
      justifyContent:"center",
      alignSelf:'center',
      alignItems:'center',
      backgroundColor:'rgb(255,255,255)',
      width: 300,
      height: 300,
      margin: 40,
      borderRadius: 20,
    },
    dashboardHeader: {
      position:"absolute",
      top: 50,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
    },
    dashboardItemsContainer: {},
    dashboardCard: {
      backgroundColor:'rgb(255,255,255)',
      marginBottom: 20,
      marginRight:20,
      marginLeft:20,
      width: 150,
      height: 150,
      borderRadius: 20,
      padding: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
    },
    dashboardCardContainer: {
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 10,
      justifyContent:'space-around',
      alignContent:'space-around',
    },
    loginForm: {
      backgroundColor: "linear-gradient(rgb(16,23,96), rgb(255,255,255))"
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "white"
    },
    subtitle: {
      fontSize: 14,
      fontWeight:'bold',
      marginTop:5,
      color: 'rgb(250,16,105)'
    },
    dashboardTitle: {
      fontSize: 20,
      marginBottom: 10,
      paddingTop: 10,
      fontWeight: 'bold',
      color: "white"
    },
    dashboardSubtitle: {
      fontSize: 14,
      fontWeight:'bold',
      marginTop:5,
      color: 'rgb(250,16,105)'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth:1,
      borderColor: 'rgb(16,23,96)',
      borderRadius: 17,
      marginBottom: 10,
      color:"white"
    },
    image: {
      width: 300,
      height: 25
    },
    dashboardImage: {
      width: 300,
      height: 25
    },
    dashboardImagePosition: {},
    loginInput: {
      width: 250,
      height: 57,
      padding: 10,
      backgroundColor:'white',
      borderWidth:1,
      borderRadius: 36,
      marginBottom: 17,
      color:'rgb(16,23,96)'
    },
    backgroundPrimary: { backgroundColor: 'rgb(16,23,96)'},
    submitButton: {
      display: 'flex',
      alignContent:'center',
      alignItems:'center',
      justifyContent: 'center',
      textAlign:'center',
      alignSelf:'center',
      backgroundColor: 'rgb(250,16,105)',
      borderRadius: 36,
      width: 250,
      height: 57,
      marginTop: 15
    },
    submitButtonText: {
      fontWeight:'bold',
      display:'flex',
      color: "rgb(255,255,255)",
    },
    submitButtonTextFA: {
      fontWeight:'bold',
      display: 'flex',
      color: "rgb(255,255,255)",
    },
    downloadButton: {
      display: 'flex',
      alignContent:'center',
      alignItems:'center',
      justifyContent: 'center',
      textAlign:'center',
      alignSelf:'center',
      backgroundColor: 'rgb(16,23,96)',
      borderRadius: 36,
      width: 250,
      height: 57,
      marginTop: 15
    },
    validateCRAButton: {
      display: 'flex',
      alignContent:'center',
      alignItems:'center',
      justifyContent: 'center',
      textAlign:'center',
      alignSelf:'center',
      backgroundColor: 'rgb(250,16,105)',
      borderRadius: 36,
      borderColor: 'rgb(16,23,96)',
      borderWidth: 2,
      width: 250,
      height: 57,
      marginTop: 15
    },
    validateCRAButtonText: {
      fontWeight:"bold",
      display:'flex',
      color: "rgb(255,255,255)",
    },
    validateCRAButtonTextFA: {
      fontWeight:"bold",
      display:'flex',
      color: "rgb(255,255,255)",
    },
    createCRAButton: {
      display: 'flex',
      alignContent:'center',
      alignItems:'center',
      justifyContent: 'center',
      textAlign:'center',
      alignSelf:'center',
      backgroundColor: 'rgb(16,23,96)',
      borderRadius: 36,
      borderColor: 'rgb(250,16,105)',
      borderWidth: 2,
      width: 250,
      height: 57,
      marginTop: 15
    },
    yearButton: {
      padding: 17,
      backgroundColor:'rgb(16,23,109)',
      borderRadius:17,
      margin: 5
    },
    yearButtonActive: {
      padding: 17,
      backgroundColor:'rgb(250,16,105)',
      borderRadius:17,
      margin: 5
    },
    yearButtonText: {
      fontWeight:"bold",
      display:'flex',
      color: "rgb(255,255,255)",
    },
    yearButtonTextActive: {
      fontWeight:"bold",
      display:'flex',
      color: "rgb(255,255,255)",
    },
    yearButtonTextFA: {
      fontWeight:'bold',
      display: 'flex',
      color: "rgb(255,255,255)",
    },
    yearButtonTextFAActive: {
      fontWeight:'bold',
      display: 'flex',
      color: "rgb(255,255,255)",
    },
    createCRAButtonText: {
      fontWeight:"bold",
      display:'flex',
      color: "rgb(255,255,255)",
    },
    createCRAButtonText_disabled: {
      fontWeight:'bold',
      display:'flex',
      color: "rgb(250,16,105)",
      opacity:0.6
    },
    createCRAButtonTextFA: {
      fontWeight:'bold',
      display: 'flex',
      color: "rgb(250,16,105)",
    },
    createCRAButtonTextFA_disabled: {
      fontWeight:'bold',
      display: 'flex',
      color: "rgb(250,16,105)",
      opacity: 0.6
    },
    downloadButtonText: {
      fontWeight:'bold',
      display:'flex',
      color: "rgb(250,16,105)",
    },
    downloadButtonText_disabled: {
      fontWeight:'bold',
      display:'flex',
      color: "rgb(250,16,105)",
      opacity:0.6
    },
    downloadButtonTextFA: {
      fontWeight:'bold',
      display: 'flex',
      color: "rgb(250,16,105)",
    },
    downloadButtonTextFA_disabled: {
      fontWeight:'bold',
      display: 'flex',
      color: "rgb(250,16,105)",
      opacity: 0.6
    },
    textPrimary: {
      color: 'rgb(16,23,96)',
      fontWeight:'bold'
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    flex_col: {
      display: 'flex',
      flexDirection: 'column'
    },
    flex_row: {
      display: 'flex',
      flexDirection:'row',
      padding: 15
    },
    pb20_textCenter: {
      paddingBottom: 60,
      textAlign:'center'
    },
    textaCenter: {
      marginTop:20,
      textAlign:"center"
    },
    pair: {
      color: 'rgb(250,16,105)',
      display:'flex',
      justifyContent:'center',
      textAlign:'center',
      alignContent:'center',
      padding:7,
      // borderBottomWidth:2,
      // borderWidth: 1,
      borderColor: 'rgb(16,23,96)',
      fontWeight:'bold'
    },
    impair: {
      color: 'rgb(16,23,96)',
      display:'flex',
      justifyContent:'center',
      textAlign:'center',
      alignContent:'center',
      padding:10,
      // borderBottom:1,
      // borderBottomWidth:2,
      // borderColor: 'rgb(16,23,96)',
      fontWeight:'bold'
    },
    pb20: {
      paddingBottom:20
    },
    mb20: {
      marginBottom: 20
    },
    p20: {
      padding: 20
    },
    around: {
      display:'flex',
      justifyContent:'space-around',
    },
    borderBottom: {
      borderWidth: 1
    },
    statementSeparator: {
      width: "100%",
      border:1,
      borderWidth:1,
      borderColor:'rgb(16,23,96)'
    },
    statementTitles: {
      paddingTop: 20
    },
    switchLabel: {
      fontSize: 12,
      fontWeight: 'bold',
      color: "white"
    },
  });