import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    freeTicketContainer: {
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

    freeTicketInfo: {
        padding: 24,
        width: '90%',
        borderRadius: 8,
        backgroundColor: '#41414d',
        marginBottom: 16,   
        marginLeft: 15,  
        marginTop: 50,          
    },

    infoProperty:{
        fontSize: 14,
        color: '#1393f6',
        fontWeight: 'bold',        
    },

    infoValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#FFF',
    },   

    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },

    action: {
      backgroundColor: '#FFF',
      borderRadius: 8,
      height: 30,
      width: '48%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    actionText: {
        color: '#666360',
        fontSize: 15,
        fontWeight: 'bold',
    },

    inputValue:{
        marginTop: 8,
        fontSize: 15,
        borderRadius: 8,  
        color: '#666360',
        marginBottom: 24,
        backgroundColor: '#FFF',
    }
});