import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
let { width } = Dimensions.get('window');

const styles = {
  container: {
    borderWidth: 1,
    borderColor: 'rgba(132, 146, 166, .2)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    width: width - 40
  },
  searchImage: {
    width: 25,
    height: 30,
    tintColor: '#9b9b9b'
  }
};

const MainSearch = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.searchImage}
        resizeMode="contain"
        source={require('../assets/img/Search.png')}
      />

      <TextInput
        style={{
          fontSize: 20,
          fontWeight: '500',
          paddingLeft: 10
        }}
        placeholder="Search by City or Activity"
      />
    </View>
  );
};

export default MainSearch;
