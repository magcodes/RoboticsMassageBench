import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container';
import CustomButton from "../../components/common/CustomButton";
import {AuthContext} from "../../navigation/AuthProvider";
import styles from './styles';
import CreateMassage from '../../screens/CreateMassage';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const DashboardComponent = () => {
    const {navigate} = useNavigation();

    const {user, logout} = useContext(AuthContext);
    return (
        <Container>
            <SafeAreaView style={{flex:1, backgroundColor: colors.white }}>
                <View style={styles.header}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:28}}>Hello,</Text>
                            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>Mary</Text>
                        </View>
                        <Text style={{margin: 10, fontSize: 16, color: colors.grey}}>
                            Where do you want to massage today?
                        </Text>
                    </View>
                </View>
           
            <View style={{height: 600}}>
                <View style={styles.containerBox} >
                    <View style={styles.boxer}>
                        <View style={styles.inner}>
                            <Text>Box1</Text>
                        </View> 
                    </View>

                    <View style={styles.boxer}>
                        <View style={styles.inner}>
                            <Text>Box2</Text>
                        </View> 
                    </View>

                    <View style={styles.boxer}>
                        <View style={styles.inner}>
                        <TouchableOpacity onPress={() => navigate('CreateMassage')}>
                                <Image 
                                    source={require('../../assets/images/backThigh.jpg')}
                                    style={{resizeMode: 'contain', width: 170, height: 150, alignSelf: 'center'}}
                                />
                            </TouchableOpacity>
                            {/* <Text>Box3</Text> */}
                        </View> 
                    </View>

                    <View style={styles.boxer}>
                        <View style={styles.inner}>
                            <TouchableOpacity onPress={() => navigate('CreateMassage')}>
                                <Image 
                                    source={require('../../assets/images/back.jpg')}
                                    style={{resizeMode: 'contain', width: 170, height: 150, alignSelf: 'center'}}
                                />
                            </TouchableOpacity>
                            {/* <Text>Box4</Text> */}
                        </View> 

                    </View>

                </View>

                <Text style={styles.subTitle}>
                        Enjoy your Massage!
                </Text>
                {/* <CustomButton 
                    style={styles.navigateButton}
                    onPress={() => navigate('Home')}
                    primary
                    title={<Text  style={styles.textTitle}>Get Started</Text>}
                />  */}

            </View>

            </SafeAreaView>

                
         {/* </View> */}


                

             {/* <CustomButton
            //     onPress={() => logout()}
            //     primary
            //     title="Logout"
            // /> */}

         </Container>
    )
}

export default DashboardComponent;
