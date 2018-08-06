import { createBottomTabNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Landing from '../screens/Landing';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Landing: {
      screen: Landing
    },
    Home: {
      screen: Home,
      tabBarVisible: false
    },
    Search: {
      screen: Search
    },
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    }
  },
  {
    initialRoute: Home,
    tabBarOptions: {
      style: {
        backgroundColor: 'white'
      }
    }
  }
);

export default BottomTabNavigator;
