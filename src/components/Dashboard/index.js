import { NavigationContainer } from '@react-navigation/native';
import React, {useContext} from 'react';
import { Text, View, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container';
import CustomButton from "../../components/common/CustomButton";
import {AuthContext} from "../../navigation/AuthProvider";
import styles from './styles';
// import {Dimensions } from 'react';



const DashboardComponent = () => {
    // const {width} = Dimensions.get("screen");
    // const cardWidth = width/2 - 20;
    const {user, logout} = useContext(AuthContext);
    
    const Card = () => {
         return (
         <View style={styles.card}>

        </View>
         )
    }
    return (
        <Container>
            <SafeAreaView style={{flex:1, backgroundColor: colors.white }}>
                <View style={styles.header}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:28}}>Hello,</Text>
                            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>Mary</Text>
                        </View>
                        <Text style={{marginTop:5, fontSize: 16, color: colors.grey}}>
                            Where do you want to massage today?
                        </Text>
                    </View>
                </View>


                <CustomButton 
                    style={styles.navigateButton}
                    onPress={() => navigation.navigate('Home')}
                    primary
                    title={<Text  style={styles.textTitle}>Get Started</Text>}
                /> 

                <FlatList>
                    showsVerticalScrollIndicator ={false}
                    numColumns={2}
                    {/* data={parts} */}
                    renderItem={({item}) => <Card part={item}/>}
                </FlatList>

            </SafeAreaView>
            {/* <CustomButton
                onPress={() => logout()}
                primary
                title="Logout"
            /> */}

         </Container>
    )
}

export default DashboardComponent;
