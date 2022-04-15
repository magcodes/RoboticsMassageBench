import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container';
import CustomButton from "../../components/common/CustomButton";
import {AuthContext} from "../../navigation/AuthProvider";
import styles from './styles';

const WelcomeComponent = () => {
    const {navigate} = useNavigation();
    const {user, logout} = useContext(AuthContext);
    
    return (
        <Container>
            <SafeAreaView style={{flex:1, backgroundColor: colors.white }}>
                <View style={{height: 400}}>
                    <Image
                        style ={{
                            width:'100%',
                            resizeMode:'contain',
                            top:-500,
                        }}
                        source={require('../../assets/images/loginimage.jpg')}       
                    /> 
                </View >

                <View style={styles.textCreation}>

                    <View>
                        <Text style={styles.title}>
                            Ready to Massage?
                        </Text>
                        <Text style={styles.subTitle}>
                            Click and enjoy your Massage
                        </Text>
                    </View>
                
                </View>  

                <CustomButton 
                    style={styles.navigateButton}
                    onPress={() => navigate('Dashboard')}
                    primary
                    title={<Text  style={styles.textTitle}>Get Started</Text>}
                /> 

            </SafeAreaView>

            

            {/* <CustomButton
                onPress={() => logout()}
                primary
                title="Logout"
            /> */}

         </Container>
    )
}

export default WelcomeComponent;
