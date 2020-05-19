import React, { useRef } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Form } from '@unform/mobile';

import Input from '../Component/Input';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Payment(){
    const route = useRoute();
    const formRef = useRef(null);
    const navigation = useNavigation();
    const data = route.params.info;
  

    function confirmPayment(data){
        console.log(data);
    }

    return(
        <View style={styles.paymentContainer}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity style={styles.headerAction} onPress={() => alert('Retornar para BuyTicket')}>                    
                    <Feather name='arrow-left' size={16} color='#FFF' />
                    <Text style={styles.headerActionText}> Retornar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.paymentInfo}>
                <Form ref={formRef} onSubmit={confirmPayment}>
                    <Text style={styles.infoProperty}>E-mail:</Text>
                    <Input style={styles.inputValue} name='mail' type='text' />                    
                    
                    <Text style={styles.infoProperty}>Forma de pagamento:</Text>
                    <Text style={styles.infoValue}>{data.paymentSelected}</Text>

                    <Text style={styles.infoProperty}>Ingresso:</Text>
                    <Text style={styles.infoValue}>{data.selectedTicket.type}</Text>

                    <Text style={styles.infoProperty}>Quantidade:</Text>
                    <Text style={styles.infoValue}>{data.amountValue}</Text>

                    <Text style={styles.infoProperty}>Valor da compra:</Text>
                    <Text style={styles.infoValue}>R$ {data.totalValue}</Text>

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