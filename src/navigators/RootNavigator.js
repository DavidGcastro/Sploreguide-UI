import { createStackNavigator } from 'react-navigation'
import PreviewNavigator from './PreviewNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import Search from '../screens/Search'
import ViewAll from '../screens/ViewAll'
import ExperienceNavigator from '../navigators/ExperienceNavigator'

const RootNavigator = createStackNavigator(
  {
    BottomTabNavigator: { screen: BottomTabNavigator },
    ViewAll: {screen: ViewAll},
    Experience: {screen: ExperienceNavigator},
    // PreviewNavigator: { screen: PreviewNavigator },
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
