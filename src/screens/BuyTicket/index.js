import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, TouchableOpacity, Image, View, Text} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import PickerSelect from 'react-native-picker-select';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function BuyTicket(){
    const route = useRoute();
    const navigation = useNavigation();    
    const selectedTicket = route.params.ticket;
    const [totalValue, setTotalValue] = useState(selectedTicket.value);
    const [amountValue, setAmountValue] = useState(String(1));
    const [paymentSelected, setPaymentSelected] = useState('');
    const paymentOptions = [
        { label: 'Boleto', value: 'Boleto'},
        { label: 'Cartão de Crédito', value: 'Cartão de Crédito'}
    ]
    const placeholder = {
        label: 'Pagar com...',
        value: null,
        color: '#9EA0A4',
    };

    function acquired() { 
            const info = {
                totalValue,
                amountValue,
                selectedTicket,
                paymentSelected

            };

            if(paymentSelected === 'Boleto'){
                navigation.navigate('Payment', {info});
            }else if (paymentSelected === 'Cartão de Crédito'){
                navigation.navigate('PaymentCard', {info});
            }else{
                alert('Uma forma de pagamento deve ser selecionada');
                return;
            }
            
        
    }

    function onChanged(text){
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
                if(parseInt(newText) > selectedTicket.amount){
                    alert('Quantidade excede da disponível');                                     
                }
            }
            else {               
                alert("Somente números");
                return;
            }
        }           
        setAmountValue(newText);
        setTotalValue(parseInt(newText) * selectedTicket.value);
    }

    return(
        <View style={styles.buyTicketContainer}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity style={styles.headerAction} onPress={() => navigation.navigate('Events')}>                    
                    <Text style={styles.headerActionText}>Cancelar</Text>
                    <MaterialIcons name="cancel" size={16} color="#FFF" />
                </TouchableOpacity>
            </View>

            <View style={styles.acquiredTicket}>                
                    <Text style={styles.ticketProperty}>Ingresso:</Text>
                    <Text style={styles.ticketValue}>{selectedTicket.type}</Text>

                    <Text style={styles.ticketProperty}>Quantidade desejada:</Text>
                    <TextInput 
                        style={styles.inputValue}
                        keyboardType='numeric'
                        onChangeText={(text)=> onChanged(text)}
                        value={amountValue}
                        maxLength={10}
                    />

                    <Text style={styles.ticketProperty}>Valor total:</Text>
                    <Text style={styles.ticketValue}>R$ {totalValue}</Text>

                    <Text style={styles.ticketProperty}>Forma de pagamento:</Text>
                    <PickerSelect 
                        placeholder={placeholder}     
                        onValueChange={(value) => setPaymentSelected(value)}
                        items={paymentOptions}
                    />

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={acquired}>
                            <Text style={styles.actionText}>Comprar</Text>
                        </TouchableOpacity>
                    </View>                
            </View>
        </View>
    );
}