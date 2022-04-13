import React, {useState, useContext} from "react";
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from "../../components/common/CustomButton";
import Input from "../../components/common/Input";
import styles from "./styles";
import {REGISTER} from '../../constants/routesNames';
import { AuthContext } from "../../navigation/AuthProvider";
 
const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useContext(AuthContext);
    const {navigate} = useNavigation();
    return (
        // <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Container>
            <Image
                height={70}
                width={70}
                source={require('../../assets/images/loginimage.jpg')}
                style={styles.logoImage}
            />

            <View>
                <Text style={styles.title}>Welcome to Home Kine Robotic's Massage</Text>
                <Text style={styles.subTitle}>Please login here</Text>

                <View style={styles.form}>
                    <Input label="Email"
                        placeholder="Enter Email"
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        iconPosition="right"
                    />

                    <Input label="Password"
                        iconPosition="right"
                        placeholder="Enter Password"
                        icon={<Text>Show</Text>}
                        secureTextEntry={true}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                    />

                    <CustomButton
                        // disabled={loading}
                        onPress={() => login(email, password)}
                        // loading={loading}
                        primary
                        title="Submit"
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity onPress={() => {
                            navigate(REGISTER);
                        }}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    
                    </View>

                </View>

            </View>
            
        </Container>
        // </KeyboardAvoidingView>
    );
}

export default LoginComponent;