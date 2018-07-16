import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: 'Home' }
);

export default MainNavigator;
