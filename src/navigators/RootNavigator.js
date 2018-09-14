import { createStackNavigator } from 'react-navigation'
import BottomTabNavigator from './BottomTabNavigator'
import Search from '../screens/Search'
import ViewAll from '../screens/ViewAll'
import Experience from '../screens/Experience'

const RootNavigator = createStackNavigator(
  {
    BottomTabNavigator: { screen: BottomTabNavigator },
    ViewAll: {screen: ViewAll},
    Experience: {screen: Experience},
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
