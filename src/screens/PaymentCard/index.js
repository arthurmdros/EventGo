import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function PaymentCard(){
    return(
        <View style={styles.View}>
            <Text style={styles.Text}>Payment Card</Text>
        </View>
    );
}