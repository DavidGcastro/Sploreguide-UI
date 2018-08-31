import { createStackNavigator } from 'react-navigation'
import PreviewScreen from '../screens/PreviewScreen'
import Experience from '../screens/Experience'

const PreviewNavigator = createStackNavigator(
  {
    Preview: {
      screen: PreviewScreen,
      navigationOptions: {
        header: null
      }
    },
    Experience: {
      screen: Experience,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: 'Preview' }
)

export default PreviewNavigator
