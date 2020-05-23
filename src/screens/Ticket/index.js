import React, {useEffect, useState} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FlatList, View, Text, Image, TouchableOpacity} from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Ticket(){
    const navigation = useNavigation();
    const route = useRoute();
    const [tickets,setTickets] = useState([]);

    const item = route.params.event;
    const event_id = item.id;

    useEffect(() => {
        api.get(`/ticket/event/${event_id}`).then(response => {
            if(response.data.length === 0){
                alert('Não há ingressos disponíveis');
                navigation.navigate('Events');
            }else{
                setTickets(response.data);
            }
            
        })
    }, [event_id]);

    function navigateToTicket(ticket){
        if(ticket.type === 'Gratuito'){
            navigation.navigate('FreeTicket', {ticket});
        }else{
            navigation.navigate('BuyTicket', {ticket});
        }
    }

    return(
        <View style={styles.ticketContainer}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity style={styles.headerAction} onPress={() => navigation.navigate('EventDetail', {item})}>
                    <Feather name="arrow-left" size={28} color="#FFF" />
                    <Text style={styles.headerActionText}>Retornar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Ingressos disponíveis</Text>
            
            <FlatList
                data={tickets}
                style={styles.ticketList}
                keyExtractor={ticket => String (ticket.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item: ticket}) => (
                <View style={styles.ticket}>
                    <Text style={[styles.ticketProperty]}>Ingresso:</Text>
                    <Text style={styles.ticketValue}>{ticket.type}</Text>

                    <Text style={styles.ticketProperty}>Valor:</Text>
                    <Text style={styles.ticketValue}>R$ {ticket.value}</Text>

                    <Text style={styles.ticketProperty}>Quantidade disponível:</Text>
                    <Text style={styles.ticketValue}>{ticket.amount}</Text> 

                    <TouchableOpacity
                        style={styles.action}
                        onPress={()=> navigateToTicket(ticket)}
                    >
                        <Text style={styles.actionText}> Adquirir </Text>                       
                    </TouchableOpacity>                        
                </View>                    
            )}
        />            
        </View>
    );
}
