import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function EventDetail(){
    const navigation = useNavigation();

    return(
        <View style={styles.View}>
            <Text style={styles.Text}>Event Detail</Text>
            <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={()=> navigation.navigate('EventDetail')}
            >
                <Text style={styles.TextButton}>Event Detail</Text>
            </TouchableOpacity>
        </View>
    );
}