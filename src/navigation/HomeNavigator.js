import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MASSAGEES, SETTINGS, CREATE_MASSAGEE, DASHBOARD, WELCOME } from '../constants/routesNames';

import Massagees from '../screens/Dashboard';
import Settings from '../screens/Settings';
import CreateMassagee from '../screens/CreateMassagee';
import Dashboard from '../screens/Dashboard';
import Welcome from '../screens/Welcome';
// import {Dimensions } from 'react';

// const {width} = Dimensions.get("screen");
// const cardWidth = width/2 - 20;
const HomeNavigator = () => { 
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name= {WELCOME} component={Welcome}></HomeStack.Screen>
            <HomeStack.Screen name= {DASHBOARD} component={Dashboard}></HomeStack.Screen>
            <HomeStack.Screen name= {CREATE_MASSAGEE} component={CreateMassagee}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;