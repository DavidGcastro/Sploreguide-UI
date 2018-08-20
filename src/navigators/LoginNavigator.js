import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const LoginNavigator = createStackNavigator(
  {
    Signup: { screen: Signup },

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
