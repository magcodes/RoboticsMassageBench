import React from "react";
import {useNavigation} from '@react-navigation/native';
import {Text, Image, TextInput, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from "../../components/common/CustomButton";
import Input from "../../components/common/Input";
import styles from "./styles";
import {LOGIN} from '../../constants/routesNames';

const RegisterComponent = () => {
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
                <Text style={styles.subTitle}>Create a free account</Text>

                <View style={styles.form}>

                    <Input
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter Username"
                        // error={errors.userName || error?.username?.[0]}
                        // onChangeText={value => {
                        // onChange({name: 'userName', value});
                        // }}
                    />

                    <Input
                        label="First Name"
                        iconPosition="right"
                        placeholder="Enter First name"
                        // onChangeText={value => {
                        // onChange({name: 'firstName', value});
                        // }}
                        // error={errors.firstName || error?.first_name?.[0]}
                    />

                    <Input
                        label="Last Name"
                        iconPosition="right"
                        placeholder="Enter Last name"
                        // onChangeText={value => {
                        // onChange({name: 'lastName', value});
                        // }}
                        // error={errors.lastName || error?.last_name?.[0]}
                    />

                    <Input
                        label="Email"
                        iconPosition="right"
                        placeholder="Enter Email"
                        // onChangeText={value => {
                        // onChange({name: 'email', value});
                        // }}
                        // error={errors.email || error?.email?.[0]}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        icon={<Text>Show</Text>}
                        secureTextEntry={true}
                        iconPosition="right"
                        // onChangeText={value => {
                        // onChange({name: 'password', value});
                        // }}
                        // error={errors.password || error?.password?.[0]}
                    />

                    {/* {console.log('error', error)} */}

                    <CustomButton
                        // disabled={loading}
                        // onPress={onSubmit}
                        // loading={loading}
                        primary
                        title="Submit"
                    />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(LOGIN);
                            }}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

            

        </Container>
    );
}

export default RegisterComponent;