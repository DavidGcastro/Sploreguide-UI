import { createStackNavigator } from 'react-navigation'
import Experience from '../screens/Experience'

const ExperienceNavigator = createStackNavigator(
  {
    Experience: {screen: Experience}
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    },
    headerMode: 'none'
  }
)

export default ExperienceNavigator
