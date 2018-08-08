import { StackNavigator } from 'react-navigation'
import Welcome from '../screens/welcome/Welcome'
import Login from '../screens/login/Login'
import SignUp from '../screens/signUp/SignUp'

const LoginAndSignupNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    SignUp: { screen: SignUp }
  },
  {
    initialRouteName: 'Welcome'
  }
)

export default LoginAndSignupNavigator
