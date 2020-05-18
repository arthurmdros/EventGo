import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function EventDetail(){
    const navigation = useNavigation();
    const route = useRoute();

    const event = route.params.event;

    return(
        <View style={styles.datailContainer}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity style={styles.headerAction} onPress={() => navigation.navigate('Events')}>
                    <Feather name="arrow-left" size={28} color="#FFF" />
                    <Text style={styles.headerActionText}>Home</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.event}>
                <Text style={[styles.eventProperty, {marginTop: 0}]}>Evento:</Text>
                <Text style={styles.eventValue}>{event.title}</Text>

                <Text style={styles.eventProperty}>Descrição:</Text>
                <Text style={styles.eventValue}>{event.description}</Text>

                <Text style={styles.eventProperty}>Tipo de evento:</Text>
                <Text style={styles.eventValue}>{event.selectedValue}</Text>

                <View style={styles.dateProperty}>
                    <Text style={styles.eventProperty}>Começa dia:</Text>
                    <Text style={styles.eventProperty}>Termina dia:</Text>
                </View>
                
                <View style={styles.dateValue}>                    
                    <Text style={styles.eventValue}>{event.selectedStartDate}</Text>                                        
                    <Text style={styles.eventValue}>{event.selectedEndDate}</Text>
                </View>

                <View style={styles.scheduleProperty}>
                    <Text style={styles.eventProperty}>Começa às:</Text>
                    <Text style={styles.eventProperty}>Termina às:</Text>
                </View>

                <View style={styles.scheduleValue}>
                    <Text style={styles.eventValue}>{event.selectedStartTime}</Text>
                    <Text style={styles.eventValue}>{event.selectedEndTime}</Text>
                </View>                                
            
                <TouchableOpacity
                    style={styles.action}
                    onPress={()=> navigation.navigate('Ticket', {event})}
                >
                    <Text style={styles.actionText}>Ingressos</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}