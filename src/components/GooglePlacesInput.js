import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { PLACES_API_KEY } from 'react-native-dotenv'
import Location from '../components/Location'
import InlineIcon from '../components/InlineIcon'

let { width } = Dimensions.get('window')

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder=''
      minLength={4} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      renderDescription={row => <Location location={row.description} />} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details)
      }}

      getDefaultValue={() => ''}

      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: PLACES_API_KEY,
        language: 'en' // language of the results
      }}

      styles={{
        container: {
          height: 20,
          width
        },
        row: {
          height: 60
        },
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}

      // debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      renderLeftButton={() => <InlineIcon IconTag='EvilIcons' iconName='location' label='Location' />}
      // renderRightButton={() => <Text>Custom text after the input</Text>}
    />
  )
}

export default GooglePlacesInput
