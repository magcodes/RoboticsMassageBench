import React, {useState, useContext} from "react";
import {useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from "../../components/common/CustomButton";
import Input from "../../components/common/Input";
import styles from "./styles";
import {LOGIN} from '../../constants/routesNames';
import {AuthContext} from '../../navigation/AuthProvider';


const RegisterComponent = ({onSubmit, onChange, form, errors}) => {
    const {navigate} = useNavigation();

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {register} = useContext(AuthContext);
    return (
        <Container>

            <View>
                <Text style={styles.title}>Create a free account</Text>
                <View style={styles.form}>

                    <Input
                        label="Email"
                        iconPosition="right"
                        placeholder="Enter Email"
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        // error={errors.email || error?.email?.[0]}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        icon={<Text>Show</Text>}
                        secureTextEntry={true}
                        iconPosition="right"
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        // error={errors.password || error?.password?.[0]}
                    />

                    <Input
                        label=" Confirm Password"
                        placeholder="Enter Password"
                        icon={<Text>Show</Text>}
                        secureTextEntry={true}
                        iconPosition="right"
                        onChangeText={(userConfirmPassword) => setConfirmPassword(confirmPassword)}
                        // error={errors.password || error?.password?.[0]}
                    />

                    <CustomButton
                        // disabled={loading}
                        onPress={() => register(email, password)}
                        // loading={loading}
                        primary
                        title="Sign Up"
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