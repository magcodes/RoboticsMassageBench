import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';
import { GlobalContext } from '../context/Provider';
import AuthNavigator from './AuthNavigator';

const AppNavContainer = () => { 
    const isLoggedIn = false;

    const state = useContext(GlobalContext);
    console.log('state :>>', state);

    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/> }           
        </NavigationContainer>
    );
};

export default AppNavContainer;