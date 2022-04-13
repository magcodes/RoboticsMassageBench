import React, {useContext} from 'react';
import { Text, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from "../../components/common/CustomButton";
import {AuthContext} from "../../navigation/AuthProvider";

const Massagees = () => {
    const {user, logout} = useContext(AuthContext);
    
    return (
        <Container>
            <Text>Hi from SignUp herreee {user.uid}</Text>

            <CustomButton
                onPress={() => logout()}
                primary
                title="Logout"
            />

        </Container>
    )
}

export default Massagees;
