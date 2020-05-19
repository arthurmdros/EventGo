import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Events from './screens/Events';
import EventDetail from './screens/EventDetail';
import Ticket from './screens/Ticket';
import BuyTicket from './screens/BuyTicket';
import Payment from './screens/Payment';
import PaymentCard from './screens/PaymentCard';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Events" component={Events}/>
                <AppStack.Screen name="EventDetail" component={EventDetail}/>
                <AppStack.Screen name="Ticket" component={Ticket}/>
                <AppStack.Screen name="BuyTicket" component={BuyTicket}/>
                <AppStack.Screen name="Payment" component={Payment}/>
                <AppStack.Screen name="PaymentCard" component={PaymentCard}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}