import { Facebook } from 'expo'
import { APPID } from 'react-native-dotenv'

import deviceStorage from './deviceStorage'
import { ASYNC_JWT_KEY } from '../constants'

const FB_FN_LN_EMAIL_URL = 'https://graph.facebook.com/me?fields=first_name,last_name,email&access_token='

async function loginWithFacebook () {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(APPID, {
    permissions: ['public_profile', 'email']
  })

  if (type === 'success') {
    const response = await fetch(`${FB_FN_LN_EMAIL_URL}${token}`)
    const graphDetails = await response.json()
    return ({graphDetails, token})
  } else {
    return ({})
  }
}

async function handleFBLogin () {
  let { graphDetails, token } = await loginWithFacebook()

  if (token) {
    let { email, first_name, last_name, id } = graphDetails

    email = email.toLowerCase()

    this.props.fbLogin(email, first_name, last_name, id, token)
      .then(async (response) => {
        let { data } = response
        await deviceStorage.saveItem(ASYNC_JWT_KEY, data.loginWithFacebook.token)
        this.props.screenProps.saveJWT(data.loginWithFacebook.token)
      }).catch((error) => {
        console.log(error)
      })
  } else {
    this.setState({loading: false})
  }
}

export { handleFBLogin }
