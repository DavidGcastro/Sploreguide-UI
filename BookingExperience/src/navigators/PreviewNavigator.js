import { createStackNavigator } from 'react-navigation'
import PreviewScreen from '../screens/PreviewScreen'
import ExperienceScreen from '../screens/ExperienceScreen'

const PreviewNavigator = createStackNavigator(
  {
    Preview: {
      screen: PreviewScreen,
      navigationOptions: {
        header: null
      }
    },
    Experience: {
      screen: ExperienceScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: 'Preview' }
)

export default PreviewNavigator
