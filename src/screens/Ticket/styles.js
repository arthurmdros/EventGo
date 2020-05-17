import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({    
    View: {
        flex: 1,
        backgroundColor: '#1393f6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + 20,
    },

    Text: {
      fontSize: 16,
      color: '#fff',
    },

    TouchableOpacity: {
      flexDirection: 'row',
      marginTop: 30,
    },

    TextButton: {
      fontSize: 16,
      fontWeight: "bold",
      color: '#1393f6',
    },

    item: {
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#41414d',
      marginBottom: 16,
      marginTop: 48,
    },

    itemProperty:{
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 24,
    },

    itemValue: {
        marginTop: 8,
        fontSize: 15,        
        color: '#FFF',
    },
  })