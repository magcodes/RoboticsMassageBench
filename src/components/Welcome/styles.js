import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    // backgroundColor: '#ffcccc',
  },

  logoImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 50,
  },

  textCreation: {
      paddingBottom : 40,
      flex: 1,
      paddingHorizontal: 50,
      justifyContent: 'space-between'
    },

    textTitle: {
        fontWeight:'bold',
        fontSize:18
    },

   navigateButton: {
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems:'center',
   },

   title: {
        fontSize:32,
        fontWeight:'bold', 
        textAlign:'center'},

  subTitle: { 
    marginTop: 20,
    // fontWeight:'bold', 
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },

   
});
