import { createStackNavigator } from 'react-navigation';
import PreviewNavigator from './PreviewNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import Search from '../screens/Search';
const RootNavigator = createStackNavigator(
  {
    BottomTabNavigator: { screen: BottomTabNavigator },
    PreviewNavigator: { screen: PreviewNavigator },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default RootNavigator;
