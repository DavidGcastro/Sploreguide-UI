import { StackNavigator } from 'react-navigation'
import Welcome from './welcome/Welcome'
import Login from './login/Login'
import SignUp from './signUp/SignUp'
import SignUp2 from './signUp/SignUp2'

const LoginAppNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    SignUp2: { screen: SignUp2 }
  },
  {
    initialRouteName: 'Welcome'
  }
)

export default LoginAppNavigator
