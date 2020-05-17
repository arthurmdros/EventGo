import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function EventDetail(){
    const navigation = useNavigation();

    return(
        <View style={styles.View}>
            <Text style={styles.Text}>Event Detail</Text>
            <View style={styles.item}>
                <Text style={[styles.itemProperty, {marginTop: 0}]}>Evento:</Text>
                <Text style={styles.itemValue}>Evento N°</Text>

                <Text style={styles.itemProperty}>Descrição:</Text>
                <Text style={styles.itemValue}>Evento criado com tal objetivo</Text>

                <Text style={styles.itemProperty}>Começa dia:</Text>
                <Text style={styles.itemValue}>00/00/0000</Text>

                <Text style={styles.itemProperty}>Termina dia:</Text>
                <Text style={styles.itemValue}>00/00/0000</Text>

                <Text style={styles.itemProperty}>Começa às:</Text>
                <Text style={styles.itemValue}>00:00</Text>

                <Text style={styles.itemProperty}>Termina às:</Text>
                <Text style={styles.itemValue}>00:00</Text>
            
            <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={()=> navigation.navigate('Ticket')}
            >
                <Text style={styles.TextButton}>Ticket</Text>
            </TouchableOpacity>

            </View>
        </View>
    );
}