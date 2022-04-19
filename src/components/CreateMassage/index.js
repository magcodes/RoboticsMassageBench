import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container';
import CustomButton from "../../components/common/CustomButton";
import {AuthContext} from "../../navigation/AuthProvider";
import styles from './styles';

const CreateMassageComponent = () => {
    const {navigate} = useNavigation();
    const {user, logout} = useContext(AuthContext);
    
    return (
        <Container>
        <View>
             <Text> Welcome</Text>
             <CustomButton 
                    style={styles.navigateButton}
                    // onPress={() => navigate('Home')}
                    primary
                    title={<Text  style={styles.textTitle}>Start</Text>}

                /> 
                   <CustomButton
                       onPress={() => logout()}
                       primary
                       title="Logout"
                   />
                
        </View>
        
        
         </Container>
    )
}

export default CreateMassageComponent;
