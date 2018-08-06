import { createStackNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import Search from '../screens/Search';
import PreviewNavigator from './PreviewNavigator';

const RootNavigator = createStackNavigator(
  {
    MainNavigator: { screen: MainNavigator },
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
