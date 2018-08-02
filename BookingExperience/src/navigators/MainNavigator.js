import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Search from '../screens/Search';
import Landing from '../screens/Landing';

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
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        header: null
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null
      }
    },
    Landing: {
      screen: Landing,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: 'Login' }
);

export default MainNavigator;
