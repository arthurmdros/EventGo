import React, { useRef } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Form } from '@unform/mobile';

import api from '../../services/api';
import nodemailer from '../../services/nodemailer';
import Input from '../Component/Input';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function FreeTicket(){
    const route = useRoute();
    const formRef = useRef(null);
    const navigation = useNavigation();
  
    const dataTicket = route.params.ticket;
    const message = `A EventGo agradece a você que utiliza de nossos serviços para ter uma ótima experiências nos eventos que divulgamos. Abaixo encontra-se as informações do seu ingresso adquirido na plataforma. Mais uma vez obrigado! 
    
    Ingresso: ${dataTicket.type}
    Quantidade: 1
    Valor Total: R$ ${dataTicket.value}`;

    async function confirmTicket(data){       
        if(data.mail ===  undefined){
            alert('Insira um e-mail');
        }else{
            try{        
                dataTicket.amount = dataTicket.amount - 1;                                        
                await api.put(`ticket/update/${dataTicket.id}`, dataTicket); 
                sendNoReply(data.mail);
            }catch(err){
                alert('Erro ao confirmar pagamento, tente novamente.');               
            }            
        }
    }

    async function sendNoReply(mail){
        const name = 'EventGo';
        const email = mail;
        const info = {
            name,
            email,
            message
        };
        try{                                   
            alert('Informações do ingresso foram enviadas para seu e-mail.');                                          
            navigation.navigate('Events'); 
            await nodemailer.post('/send', info);                   
        }catch(err){
            alert('Erro ao confirmar pagamento, tente novamente.');                
        }         
    }

    return(
        <View style={styles.freeTicketContainer}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity style={styles.headerAction} onPress={() => navigation.navigate('Events')}>                    
                    <Text style={styles.headerActionText}>Cancelar</Text>
                    <MaterialIcons name="cancel" size={16} color="#FFF" />
                </TouchableOpacity>
            </View>

            <View style={styles.freeTicketInfo}>
                <Form ref={formRef} onSubmit={confirmTicket}>
                    <Text style={styles.infoProperty}>E-mail:</Text>
                    <Input style={styles.inputValue} name='mail' type='text' />                                        

                    <Text style={styles.infoProperty}>Ingresso:</Text>
                    <Text style={styles.infoValue}>{dataTicket.type}</Text>

                    <Text style={styles.infoProperty}>Quantidade:</Text>
                    <Text style={styles.infoValue}>1</Text>

                    <Text style={styles.infoProperty}>Valor da compra:</Text>
                    <Text style={styles.infoValue}>R$ {dataTicket.value}</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={() => formRef.current.submitForm()}>
                            <Text style={styles.actionText}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </Form>
            </View>
        </View>
    );
}