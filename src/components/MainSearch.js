import React, { Component } from 'react';
import { View, TextInput, Image, Dimensions } from 'react-native';
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
    width: 20,
    height: 30,
    tintColor: '#9b9b9b'
  }
};

export default class MainSearch extends Component {
  constructor() {
    super();
    this.state = {
      search: 'New York, New York'
    };
  }
  componentDidMount() {
    this.setState({ search: this.props.search });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.searchImage}
          resizeMode="contain"
          source={require('../assets/img/Search.png')}
        />
        <TextInput
          onChangeText={search => this.setState({ search })}
          onEndEditing={() => {
            let search = this.state.search;
            this.props.props.navigation.navigate('Search', { search });
          }}
          style={{
            fontSize: 20,
            fontWeight: '500',
            paddingLeft: 10
          }}
          placeholder="Search by City or Activity"
        />
      </View>
    );
  }
}
