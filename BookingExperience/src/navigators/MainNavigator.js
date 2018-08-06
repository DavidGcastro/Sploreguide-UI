import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
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
    Landing: {
      screen: Landing,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: 'Home' }
);
export default MainNavigator;
