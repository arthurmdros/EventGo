import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    datailContainer: {
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
    
    event: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#41414d',
        marginBottom: 16,
        marginTop: 48,
    },

    eventProperty:{
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 24,
    },

    eventValue: {
        marginTop: 8,
        fontSize: 15,        
        color: '#FFF',
    },

    dateValue: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    dateProperty: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    scheduleValue: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    scheduleProperty: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    action: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 65,
    },

    actionText: {
        color: '#1393f6',
        fontSize: 15,
        fontWeight: 'bold',
    },

});