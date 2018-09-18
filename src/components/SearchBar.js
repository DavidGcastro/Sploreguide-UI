import React from 'react'
import { View, Image, TouchableOpacity, Dimensions } from 'react-native'
import GoBack from './GoBack'
let { width } = Dimensions.get('window')

const styles = {
  container: {
    borderWidth: 1,
    borderColor: 'rgba(132, 146, 166, .2)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    width: width - 40
  },
  searchImage: {
    width: 20,
    height: 30,
    tintColor: '#9b9b9b'
  }
}

const SearchBar = ({ navigation, search, clear }) => {
  return (
    <View>
      <View style={styles.container}>
        {clear
          ? (<TouchableOpacity
            onPress={() => navigation.navigate('Landing', {
              query: {}
            })}>
            <GoBack color={'black'} />
          </TouchableOpacity>
          )
          : (
            <Image
              style={styles.searchImage}
              resizeMode='contain'
              source={require('../assets/img/Search.png')}
            />
          )
        }
        <TouchableOpacity
          style={{ flex: 1, width: '100%' }}
          onPress={() => {
            navigation.navigate('Search')
          }}>
          {search}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SearchBar
