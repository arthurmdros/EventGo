import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    View: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#1393f6',
    },

    Text: {
        fontSize: 16,
        color: '#FFF',
    }

});