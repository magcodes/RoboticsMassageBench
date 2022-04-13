import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LOGIN, REGISTER } from '../constants/routesNames';
 
import Login from '../screens/Login';
import Register from '../screens/Register';


const AuthNavigator = () => { 
    const AuthStack = createNativeStackNavigator();
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={LOGIN} component={Login}
                options={{header: () => null}}
            screenOptions={{headerShown:false}}>
        
            </AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={Register}
                options ={({LOGIN}) => ({
                    title:'',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },
                })}  
            screenOptions={{headerShown:true}} >

            </AuthStack.Screen>
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;