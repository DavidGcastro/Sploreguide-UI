import { createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';

const MainNavigator = createStackNavigator(
  {
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
