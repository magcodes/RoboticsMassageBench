import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MASSAGEES, SETTINGS, CREATE_MASSAGE, DASHBOARD, WELCOME } from '../constants/routesNames';
import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';
import Dashboard from '../screens/Dashboard';
import CreateMassage from '../screens/CreateMassage';

const HomeNavigator = () => { 
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name= {WELCOME} component={Welcome}></HomeStack.Screen>
            <HomeStack.Screen name= {DASHBOARD} component={Dashboard}></HomeStack.Screen>
            <HomeStack.Screen name= {CREATE_MASSAGE} component={CreateMassage}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;