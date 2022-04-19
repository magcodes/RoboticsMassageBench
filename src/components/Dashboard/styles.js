import {StyleSheet} from 'react-native';


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

  containerBox: {
    width: '100%',
    height: '85%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: -100,
    borderColor: 'red',
  },

  boxer: {
    width: '50%',
    height: '50%',
    padding: 5,
    borderColor: 'red',
  },

  inner: {
    flex: 1,
    backgroundColor: '#eee',
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }, 

  subTitle: { 
    marginTop: 20,
    fontWeight:'bold', 
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'blue',
  },

  image: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    borderColor: '#fff',
    borderWidth: 3
  }
 
   
});
