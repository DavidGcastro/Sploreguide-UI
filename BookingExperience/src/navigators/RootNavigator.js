import { createStackNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import PreviewNavigator from './PreviewNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import Search from '../screens/Search';
import Signup from '../screens/Signup';

const RootNavigator = createStackNavigator(
  {
    Signup: { screen: Signup },
    MainNavigator: { screen: MainNavigator },
    PreviewNavigator: { screen: PreviewNavigator },

    Search: {
      screen: Search,
      navigationOptions: {
        header: null
      }
    },
    BottomTabNavigator: { screen: BottomTabNavigator }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default RootNavigator;
