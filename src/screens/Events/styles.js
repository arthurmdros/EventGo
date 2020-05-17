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
      marginTop: 10,
    },

    TextButton: {
      fontSize: 16,
      fontWeight: "bold",
      color: '#1393f6',      
    },

    FlatList:{
      marginTop: 30,
      paddingHorizontal: 20,
    },

    item:{
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#41414d',
      marginBottom: 16,
    },

    itemProperty:{
      fontSize: 14,
      color: '#FFF',
      fontWeight: 'bold',
    },

    itemValue:{
      marginTop: 8,
      fontSize: 15,
      marginBottom: 24,
      color: '#FFF',
    },
  })