import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './styles';

export default function Ticket(){
    return(
        <View style={styles.View}>
            <Text style={styles.Text}>Ticket</Text>
            <View style={styles.item}>
                <Text style={[styles.itemProperty, {marginTop: 0}]}>Ingresso:</Text>
                <Text style={styles.itemValue}>Ingresso tal</Text>

                <Text style={styles.itemProperty}>Valor:</Text>
                <Text style={styles.itemValue}>R$ 00,00</Text>

                <Text style={styles.itemProperty}>Quantidade:</Text>
                <Text style={styles.itemValue}>1</Text>                
            
            <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={()=> alert('Ingresso adquirido, enviando para o seu e-mail')}
            >
                <Text style={styles.TextButton}>Buy Ticket</Text>
            </TouchableOpacity>

            </View>
        </View>
    );
}