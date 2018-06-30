import { TabNavigator } from 'react-navigation'
import Explore from '../screens/explore/Explore'

const AppLandingNavigator = TabNavigator(
  {
    Explore: { screen: Explore },
    Trips: { screen: Explore },
    Personalized: { screen: Explore },
    Inbox: { screen: Explore },
    Profile: { screen: Explore }
  }
)

export default AppLandingNavigator
