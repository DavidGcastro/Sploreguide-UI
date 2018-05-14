import { TabNavigator } from 'react-navigation'
import { Explore } from './explore/Explore'

const MainAppNavigator = TabNavigator(
  {
    Explore: { screen: Explore },
    Explore2: { screen: Explore }
  }
)

export default MainAppNavigator
