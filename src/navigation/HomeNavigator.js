import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MASSAGEES, SETTINGS, CREATE_MASSAGEE } from '../constants/routesNames';

import Massagees from '../screens/Massagees';
import Settings from '../screens/Settings';
import CreateMassagee from '../screens/CreateMassagee';


const HomeNavigator = () => { 
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name= {MASSAGEES} component={Massagees}></HomeStack.Screen>
            <HomeStack.Screen name= {CREATE_MASSAGEE} component={CreateMassagee}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;