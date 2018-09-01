import { ifIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Dimensions } from 'react-native'
let { width } = Dimensions.get('window')
let landingStyles = {
  parent: {
    flex: 1,
    ...ifIphoneX(
      {
        paddingTop: getStatusBarHeight() + 20
      },
      {
        paddingTop: 30,
        paddingBottom: 0
      }
    ),
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  wrapper: {
    width: width - 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'center',
    paddingBottom: 20
  },
  TopText: {
    color: 'rgba(48, 55, 64, 1)',
    fontSize: 25,
    fontFamily: 'SF-UI-Text-Bold',
    paddingTop: 20
  },
  viewAll: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  viewAllText: {
    color: 'rgba(48, 55, 64, 1)',
    fontSize: 15,
    paddingRight: 10
  },
  activityType: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
    borderRadius: 3,
    backgroundColor: 'rgba(227, 60, 54, 1)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    overflow: 'hidden',
    fontFamily: 'SF-UI-Text-Semibold'

  },
  price: {
    fontSize: 30,
    color: 'white',
    letterSpacing: 0.8,
    fontFamily: 'SF-UI-Text-Regular'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    top: 25
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 25,
    borderLeftWidth: 5,
    borderLeftColor: 'rgba(227, 60, 54, 1)'
  },
  bottomContainerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 20
  },

  location: {
    fontFamily: 'SF-UI-Text-Regular',
    fontSize: 18,
    color: 'white',
    paddingBottom: 10
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'SF-UI-Text-Bold',
    paddingBottom: 15
  },
  lastContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
    alignItems: 'baseline'
  },

  smallTextBottom: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, .8)',
    fontFamily: 'SF-UI-Text-Regular',
    paddingLeft: 3
  }
}

export default landingStyles
