import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Landing from '../screens/Landing';
import Search from '../screens/Search';

const LoginNavigator = createStackNavigator(
  {
    // Landing: {
    //   screen: Landing,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // Search: {
    //   screen: Search,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
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
    }
  },
  { initialRoute: Home }
);
export default LoginNavigator;
