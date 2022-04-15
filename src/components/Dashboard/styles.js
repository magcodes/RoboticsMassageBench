import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {Dimensions } from 'react';

// const {width} = Dimensions.get("screen");
// const cardWidth = width/2 - 20;


export default StyleSheet.create({
  container: {
    // backgroundColor: '#ffcccc',
  },

  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },

  card: {
    height:220,
    width: "100%",
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: colors.white
  },
  
   
});
