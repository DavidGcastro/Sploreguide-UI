import { createStackNavigator } from 'react-navigation'
import BottomTabNavigator from './BottomTabNavigator'
import Search from '../screens/Search'
import ViewAll from '../screens/ViewAll'
import Experience from '../screens/Experience'
import TermsOfService from '../screens/TermsOfService'
import Payment from '../screens/Payment'

const RootNavigator = createStackNavigator(
  {
    BottomTabNavigator: { screen: BottomTabNavigator },
    ViewAll: { screen: ViewAll },
    Experience: { screen: Experience },
    TermsOfService: { screen: TermsOfService },
    Payment: { screen: Payment },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    navigationOptions: {

      gesturesEnabled: false

    },
    mode: 'modal',
    headerMode: 'none'
  }
)

export default RootNavigator
