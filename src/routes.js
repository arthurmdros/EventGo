import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Events from './screens/Events';
import EventDetail from './screens/EventDetail';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Events" component={Events}/>
                <AppStack.Screen name="EventDetail" component={EventDetail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}