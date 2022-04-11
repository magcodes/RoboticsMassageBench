import React from "react";
import {useNavigation} from '@react-navigation/native';
import {Text, Image, TextInput, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from "../../components/common/CustomButton";
import Input from "../../components/common/Input";
import styles from "./styles";
import {REGISTER} from '../../constants/routesNames';

const LoginComponent = () => {
    const {navigate} = useNavigation();
    return (
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
                    <Input label="Username"
                        placeholder="Enter Username"
                        // onChangeText={value => {
                        // onChange({name: 'userName', value});
                        // }}
                        iconPosition="right"
                    />

                    <Input label="Password"
                        iconPosition="right"
                        placeholder="Enter Password"
                        icon={<Text>Show</Text>}
                        secureTextEntry={true}
                        // onChangeText={value => {
                        // onChange({name: 'password', value});
                        // }}
                    />
               

                    <CustomButton
                        // disabled={loading}
                        // onPress={onSubmit}
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
    );
}

export default LoginComponent;