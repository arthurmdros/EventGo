import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Form } from '@unform/mobile';

import styles from './styles';
import Input from '../Component/Input';
import logoImg from '../../assets/logo.png';

export default function PaymentCard(){
    const formRef = useRef(null);
    const route = useRoute();
    const navigation = useNavigation();
    const data = route.params.info;
    const ticket = data.selectedTicket;

    function confirmPaymentCard(data){
        console.log(data);
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
                    <Text style={styles.infoValue}>{data.paymentSelected}</Text>

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