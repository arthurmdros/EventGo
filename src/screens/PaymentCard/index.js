import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Form } from '@unform/mobile';

import api from '../../services/api';
import nodemailer from '../../services/nodemailer';
import styles from './styles';
import Input from '../Component/Input';
import logoImg from '../../assets/logo.png';

export default function PaymentCard(){
    const formRef = useRef(null);
    const route = useRoute();
    const navigation = useNavigation();

    const dataTicket = route.params.info;
    const ticket = dataTicket.selectedTicket;
    

    async function confirmPaymentCard(data){
       
        if(data.mail === undefined){
            alert('Insira um e-mail');
        }else if(data.numberCard === undefined || data.numberCard.length < 16){
            alert('Número do cartão deve conter pelo menos que 16 dígitos');
        }else if(data.holder === undefined){
            alert('Nome do titular é obrigatório');
        }else if(data.expirationDate === undefined){
            alert('Data de validade é obrigatório');
        }else if(data.code === undefined || data.code.length < 3){
            alert('Código do cartão possui 3 dígitos');
        }else{
            const name = 'EventGo';
            const email = data.mail;
            const message = `A EventGo agradece a você que utiliza de nossos serviços para ter uma ótima experiências nos eventos que divulgamos. Abaixo encontra-se as informações do seu ingresso adquirido na plataforma. Mais uma vez obrigado! 
    
                Ingresso: ${ticket.type}
                Quantidade: ${dataTicket.amountValue}
                Valor Total: R$ ${dataTicket.totalValue}
                Forma de pagamento: ${dataTicket.paymentSelected}
                Número do cartão: ${data.numberCard}
                Nome do titular do cartão: ${data.holder}
                Data de validade: ${data.expirationDate}
                Código de verificação: ${data.code}
            `;
            const info = {
                name,
                email,
                message
            };
            try{                                                   
                dataTicket.selectedTicket.amount = dataTicket.selectedTicket.amount - dataTicket.amountValue;  
                await api.put(`ticket/update/${dataTicket.selectedTicket.id}`, dataTicket.selectedTicket);                
                await nodemailer.post('/send', info);   
                alert('Informações do ingresso foram enviadas para seu e-mail.');
                navigation.navigate('Events');             
            }catch(err){
                alert('Erro ao confirmar pagamento, tente novamente.');                
            }
        }
    }

    return(
        <View style={styles.paymentCardContainer}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity style={styles.headerAction} onPress={() => navigation.navigate('BuyTicket', {ticket})}>                    
                    <Feather name='arrow-left' size={16} color='#FFF' />
                    <Text style={styles.headerActionText}> Retornar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.paymentCardInfo}>
                <Form ref={formRef} onSubmit={confirmPaymentCard}>
                    <Text style={styles.infoProperty}>E-mail:</Text>
                    <Input style={styles.inputValue} name='mail' type='text' />                    
                    
                    <Text style={styles.infoProperty}>Forma de pagamento:</Text>
                    <Text style={styles.infoValue}>{dataTicket.paymentSelected}</Text>

                    <Text style={styles.infoProperty}>Número do cartão:</Text>
                    <Input style={styles.inputValue}  keyboardType='numeric' name='numberCard' type='numeric' />                   

                    <Text style={styles.infoProperty}>Nome do titular no cartão:</Text>
                    <Input style={styles.inputValue} name='holder' type='text' />
            
                    <Text style={styles.infoProperty}>Data de validade:</Text>
                    <Input style={styles.inputValue} name='expirationDate' type='text' />

                    <Text style={styles.infoProperty}>Código de verificação:</Text>
                    <Input style={styles.inputValue} keyboardType='numeric' name='code' type='numeric' />

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
