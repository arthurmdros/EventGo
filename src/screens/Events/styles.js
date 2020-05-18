import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    eventsContainer: {
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

    headerText: {
        fontSize: 15,
        color: '#FFF',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 20,
        marginBottom: 16,
        marginTop: 40,
        color: '#FFF',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#FFF',
    },
    
    eventList: {
        marginTop: 32,
    },

    event: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    eventProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    eventValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },
    
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#1393f6',
        fontSize: 15,
        fontWeight: 'bold',
    },
})