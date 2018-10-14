import { createStackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const LoginNavigator = createStackNavigator(
  {
    Login: { screen: Login },

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
  {
    navigationOptions: {
      gesturesEnabled: false
    },
    initialRoute: Home }
)
export default LoginNavigator
