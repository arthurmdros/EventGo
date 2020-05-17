import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Events(){

    const navigation = useNavigation();

    const data = [
        {
            id:'1',
            title: 'Evento 1'
        },
        {
            id:'2',
            title: 'Evento 2'
        },
        {
            id:'3',
            title: 'Evento 3'
        },
        {
            id:'4',
            title: 'Evento 4'
        },
    ]

    return(
        <View style={styles.View}>
            <Text style={styles.Text}>Events List</Text>
            <FlatList
                data={data}
                style={styles.FlatList}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.itemProperty}>Título:</Text>
                        <Text style={styles.itemValue}>{item.title}</Text>

                        <TouchableOpacity
                            style={styles.TouchableOpacity}
                            onPress={()=> navigation.navigate('EventDetail')}
                        >
                            <Text style={styles.TextButton}> Ver mais detalhes </Text>
                            <Feather name='arrow-right' size={16} color={'#1393f6'}/>
                        </TouchableOpacity>                        
                    </View>                    
                )}
            />
        </View>
    );
}