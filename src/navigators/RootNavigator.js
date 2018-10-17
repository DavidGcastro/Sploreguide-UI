import { createStackNavigator } from 'react-navigation'
import BottomTabNavigator from './BottomTabNavigator'
import Search from '../screens/Search'
import ViewAll from '../screens/ViewAll'
import Experience from '../screens/Experience'
import TermsOfService from '../screens/TermsOfService'
import Payment from '../screens/Payment'
import Message from '../screens/Message'

const RootNavigator = createStackNavigator(
  {
    BottomTabNavigator: { screen: BottomTabNavigator },
    ViewAll: { screen: ViewAll },
    Experience: { screen: Experience },
    Payment: { screen: Payment },
    TermsOfService: { screen: TermsOfService },
    Message: { screen: Message },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: true

    },
    mode: 'modal',
    headerMode: 'none'
  }
)

export default RootNavigator
