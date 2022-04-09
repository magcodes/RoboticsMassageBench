import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';
import { GlobalContext } from '../context/Provider';

const AppNavContainer = () => { 
    const isLoggedIn = true;

    const state = useContext(GlobalContext);
    console.log('state :>>', state);
    // const {
    //     authInitialState: {isLoggedIn},
    // } = useContext(GlobalContext);
    
    // console.log('isLoggedIn :>>', isLoggedIn);

    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/> }           
        </NavigationContainer>
    );
};

export default AppNavContainer;