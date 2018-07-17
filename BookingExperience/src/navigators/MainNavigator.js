import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
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

export default MainNavigator;
