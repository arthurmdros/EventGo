import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    ticketContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#1393f6',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerAction: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    headerActionText: {
      color: '#FFF',
      fontSize: 16, 
      fontWeight: 'bold',
    },

    title: {
      fontSize: 20,
      marginBottom: 16,
      marginTop: 40,
      color: '#FFF',
      fontWeight: 'bold',
    },
    
    ticketList: {
      marginTop: 20,
      marginLeft: 30,      
    },

    ticket: {
        padding: 24,
        width: '90%',
        borderRadius: 8,
        backgroundColor: '#41414d',
        marginBottom: 16,        
    },

    ticketProperty:{
        fontSize: 14,
        color: '#1393f6',
        fontWeight: 'bold',
    },

    ticketValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#FFF',
    },   

    action: {
      backgroundColor: '#FFF',
      borderRadius: 8,
      height: 30,
      width: '48%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginLeft: 50,
    },

    actionText: {
        color: '#1393f6',
        fontSize: 15,
        fontWeight: 'bold',
    },

});