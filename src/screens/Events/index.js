import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {FlatList, View, Image, Text, TouchableOpacity} from 'react-native';

import logoImg from '../../assets/logo.png';
import api from '../../services/api';
import styles from './styles';

export default function Events(){

    const navigation = useNavigation();

    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    async function loadEvents(){
        if(loading){
            return;
        }

        if(total > 0 && events.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('event/index', {
            params: {page}
        });

        setEvents([...events, ...response.data]);
        setTotal(response.headers['Total-Events']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadEvents();
    }, []);

    return(
        <View style={styles.eventsContainer}>
            <View style={styles.header}>
                <Image source={logoImg}/>
            </View>

            <Text style={styles.title}>Bem-Vindo ao EventGo</Text>
            <Text style={styles.description}>
                Na plataforma você encontra eventos que deseja frequentar e 
                além disso adquire ingressos que confirmam sua presença.
            </Text>

            <FlatList
                data={events}
                style={styles.eventList}
                keyExtractor={event => String (event.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadEvents}
                onEndReachedThreshold={0.2}
                renderItem={({item: event}) => (
                    <View style={styles.event}>
                        <Text style={styles.eventProperty}>Título:</Text>
                        <Text style={styles.eventValue}>{event.title}</Text>

                        <Text style={styles.eventProperty}>Descrição:</Text>
                        <Text style={styles.eventValue}>{event.description}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={()=> navigation.navigate('EventDetail', {event})}
                        >
                            <Text style={styles.detailsButtonText}> Ver mais detalhes </Text>
                            <Feather name='arrow-right' size={16} color={'#1393f6'}/>
                        </TouchableOpacity>                        
                    </View>                    
                )}
            />
        </View>
    );
}