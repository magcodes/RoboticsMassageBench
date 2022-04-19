import React, {useContext, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container';
import CustomButton from "../../components/common/CustomButton";
import {AuthContext} from "../../navigation/AuthProvider";
import styles from './styles';
import Slider from '@react-native-community/slider';

const CreateMassageComponent = () => {
    const {navigate} = useNavigation();
    const {user, logout} = useContext(AuthContext);
    const [range, setRange] = useState('50%');
    const [sliding, setSliding] = useState('Speed');

    return (
        <Container>
            <View>
                <View style={styles.header}>   
                    {/* <Text> Welcome</Text> */}
                    <Text style = {{fontSize: 30, fontWeight: 'bold', margin: 10}}>{sliding}</Text>
                    <Text style = {{fontSize: 30, fontWeight: 'bold'}}>{range}</Text>
                </View>

                <Slider 
                    style={styles.slider}
                    minimumValue ={0}
                    maximumValue = {1}
                    minimumTrackTintColor = 'tomato'
                    maximumTrackTintColor = '#000'
                    thumbTintColor = 'tomato'
                    value={.5}
                    onValueChange = {value => setRange(parseInt(value * 100) + '%')}
                    onSlidingStart = {() => setSliding('Increasing speed..')}
                    onSlidingComplete = {() => setSliding('Speed')}
                />

                <View style={styles.controlButtons}>
                    <CustomButton 
                        style={styles.startButton}
                        secondary
                        title={<Text  style={styles.textTitle}>Start</Text>}
                    /> 

                    <CustomButton 
                        style={styles.stopButton}
                        secondary
                        title={<Text  style={styles.textTitle}>Stop</Text>}
                    /> 
                </View>

                {/* <View style={styles.speedLevels}>
                    <View style={styles.easyButton}>
                        <Text>Easy</Text>
                        <CustomButton 
                            secondary
                            title={<Text  style={styles.textTitle}></Text>}
                        /> 
                    </View>
                   

                    <CustomButton 
                        style={styles.mediumButton}
                        secondary
                        title={<Text  style={styles.textTitle}>Medium</Text>}
                    /> 

                    <CustomButton 
                        style={styles.hardButton}
                        secondary
                        title={<Text  style={styles.textTitle}>Hard</Text>}
                    /> 
                </View> */}

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
