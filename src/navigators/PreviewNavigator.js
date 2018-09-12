import { createStackNavigator } from 'react-navigation'
import ViewAll from '../screens/ViewAll'
import Experience from '../screens/Experience'

const PreviewNavigator = createStackNavigator(
  {
    ViewAll: {
      screen: ViewAll,
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
  {
    navigationOptions: {
      gesturesEnabled: false
    },
    initialRouteName: 'ViewAll' }
)

export default PreviewNavigator
