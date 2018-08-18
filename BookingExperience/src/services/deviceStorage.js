import { AsyncStorage } from 'react-native'
import { ASYNC_JWT_KEY } from '../constants'

const deviceStorage = {
  async saveItem (key, value) {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      console.log(`AsyncStorage Error: ${error.message}`)
    }
  },

  async getItem (key) {
    try {
      return await AsyncStorage.getItem(key)
    } catch (error) {
      console.log(`AsyncStorage Error: ${error.message}`)
    }
  },

  async deleteItem (key) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.log(`AsyncStorage Error: ${error.message}`)
    }
  },

  async deleteMultipleItems (arrayOfKeys) {
    try {
      await AsyncStorage.multiRemove(arrayOfKeys)
    } catch (error) {
      console.log(`AsyncStorage Error: ${error.message}`)
    }
  },

  async loadJWT () {
    try {
      const value = await AsyncStorage.getItem(ASYNC_JWT_KEY)
      if (value !== null) {
        this.setState({
          jwt: value,
          loading: false
        })
      } else {
        this.setState({
          loading: false
        })
      }
    } catch (error) {
      console.log(`AsyncStorage Error: ${error.message}`)
    }
  },

  async deleteJWT () {
    try {
      await AsyncStorage.removeItem(ASYNC_JWT_KEY)
        .then(() => {
          this.setState({jwt: ''})
        })
    } catch (error) {
      console.log(`AsyncStorage Error: ${error.message}`)
    }
  }
}

export default deviceStorage
