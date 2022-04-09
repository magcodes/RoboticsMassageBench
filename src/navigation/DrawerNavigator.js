import React from 'react';

import {Text, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routesNames';

const Login = () => {
    return (
        <View>
            <Text>Hi from Login</Text>
        </View>
    )
}

const SignUp = () => {
    return (
        <View>
            <Text>Hi from SignUp</Text>
        </View>
    )
}

const DrawerNavigator = () => { 
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;