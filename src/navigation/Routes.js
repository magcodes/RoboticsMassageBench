import React, {useContext, useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
import HomeNavigator from './HomeNavigator';

const AppNavContainer = () => { 
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitializing(false);
    }
    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);
    if (initializing) return null;

    return (
        <NavigationContainer>
            {user ? <DrawerNavigator/> : <AuthNavigator/> }           
            {/* <HomeNavigator /> */}
        </NavigationContainer>
    );
};

export default AppNavContainer;