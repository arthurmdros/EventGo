import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, TouchableOpacity, Image, View, Text} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function BuyTicket(){
    const route = useRoute();
    const navigation = useNavigation();    
    const selectedTicket = route.params.ticket;
    const [totalValue, setTotalValue] = useState(selectedTicket.value);
    const [amountValue, setAmountValue] = useState(String(1));

    function acquired() { 
            alert(selectedTicket.amount - parseInt(amountValue));
            alert('Quantidade:'+amountValue+' '+'Valor:'+totalValue);     
        
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

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={acquired}>
                            <Text style={styles.actionText}>Comprar</Text>
                        </TouchableOpacity>
                    </View>                
            </View>
        </View>
    );
}