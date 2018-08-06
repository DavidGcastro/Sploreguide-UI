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
  { initialRouteName: 'Home' }
);

export default MainNavigator;


// const MainCardNavigator = StackNavigator(
//   {
//     Home: { screen: Home },
//     CardScreen1: { screen: CardScreen1 },
//     CardScreen2: { screen: CardScreen2 },
//   },
//   {
//     headerMode: 'none',
//   },
// );

// const MainModalNavigator = StackNavigator(
//   {
//     MainCardNavigator: { screen: MainCardNavigator }
//     ModalScreen1: { screen: ModalScreen1 },
//     ModalScreen2: { screen: ModalScreen2 },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   },
// );
