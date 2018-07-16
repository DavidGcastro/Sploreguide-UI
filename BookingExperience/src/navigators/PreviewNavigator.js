/*
* @Author: Abhi
* @Date:   2018-06-30 22:17:04
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-08 13:58:11
*/

import { createStackNavigator } from 'react-navigation';
import PreviewScreen from '../screens/PreviewScreen';
import ExperienceScreen from '../screens/ExperienceScreen';
import Login from '../screens/Login';

const PreviewNavigator = createStackNavigator(
  {
    Preview: {
      screen: PreviewScreen,
      navigationOptions: {
        header: null
      }
    },
    Experience: {
      screen: ExperienceScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: 'Login' }
);

export default PreviewNavigator;
