import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
console.log(height);
const styles = {
  image: {
    width: '100%',
    height: '100%'
  },

  logo: {
    marginBottom: 10
  },

  topChild: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    //CHANGE AS NEEDED
    marginBottom: height / 2,
    justifyContent: 'center'
  },

  bottomChild: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //CHANGE AS NEEDED
    marginBottom: 30
  },
  title: {
    textAlign: 'center',
    color: 'white',
    letterSpacing: 10,
    fontFamily: 'SF-UI-Text-Regular',

    fontSize: 30,
    fontWeight: '500'
  },
  subtitle: {
    color: 'white',
    paddingTop: 10,
    fontSize: 12,
    letterSpacing: 3
  },

  socialIcons: {
    width: 29
  }
};

export default styles;
