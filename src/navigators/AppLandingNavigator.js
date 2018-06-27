import { TabNavigator } from 'react-navigation'
import Explore from '../screens/explore/Explore'

const AppLandingNavigator = TabNavigator(
  {
    Explore: { screen: Explore },
    Explore2: { screen: Explore }
  }
)

export default AppLandingNavigator
