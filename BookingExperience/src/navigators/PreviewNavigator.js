/*
* @Author: Abhi
* @Date:   2018-06-30 22:17:04
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-08 13:58:11
*/

import { createStackNavigator } from 'react-navigation';
import PreviewScreen from '../screens/PreviewScreen';
import ExperienceScreen from '../screens/ExperienceScreen';

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
    }
  },
  { initialRouteName: 'Preview' }
);

export default PreviewNavigator;
