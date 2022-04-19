import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  container: {
    // backgroundColor: '#ffcccc',
  },

  header: {
    // alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    // justifyContent: 'center',
  }, 

  slider: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%',
    padding: 5,
    marginBottom: 20
  },

  controlButtons: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
},

  startButton:{
      backgroundColor:'green',
      width: '40%',
      height: 50,
      margin: 15,
  },

  stopButton: {
      backgroundColor: 'red',
      width: '40%',
      height: 50,
      margin: 15,
  },

  easyButton: {
    width: '50%',
    height: 50,
    flexDirection: 'row',
    alignContent: 'space-between'
  },
  speedLevels: {
    //   height: 220,

  }

  
   
});
