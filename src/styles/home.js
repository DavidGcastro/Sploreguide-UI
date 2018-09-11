import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')
const styles = {
  image: {
    width: '100%',
    height: '100%'
  },
  video: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%'
  },
  logo: {
    marginBottom: 10,
    width: 50,
    marginRight: 12
  },

  topChild: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    // CHANGE AS NEEDED
    flexDirection: 'row',
    marginBottom: height / 2,
    justifyContent: 'center'
  },

  bottomChild: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // CHANGE AS NEEDED
    marginBottom: 30
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'SF-UI-Text-Heavy',
    fontSize: 40,
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
}

export default styles
