import { createStackNavigator } from 'react-navigation'
import PreviewNavigator from './PreviewNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import Search from '../screens/Search'
import Experience from '../screens/Experience'
const RootNavigator = createStackNavigator(
  {
    Experience: {screen: Experience},
    BottomTabNavigator: { screen: BottomTabNavigator },
    PreviewNavigator: { screen: PreviewNavigator },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default RootNavigator
