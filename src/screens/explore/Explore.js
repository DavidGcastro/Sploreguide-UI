import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, Dimensions } from 'react-native'


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c70039',
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  fbButton: {
    backgroundColor: '#4267b2',
    borderRadius: 30,
    width: Dimensions.get('window').width * 0.7,
  },
  row: {
    marginTop: 15,
  },
  passwordHolder: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  passwordBox: {
    alignSelf: 'stretch',
    paddingVertical: 0,
  },
  textInput: {
    height: 50,
    width: Dimensions.get('window').width * 0.8,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    color: '#fff',
    fontSize: 16,
  },
  visibilityBtn:{
    position: 'absolute',
    right: 5,
    height: 40,
    width: 50,
    padding: 5
  },
  logInButton: {
    width: Dimensions.get('window').width * 0.13,
    paddingLeft: 18,
    paddingBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  logInArrow: {
    color: '#c70039',
    fontSize: 35
  },
  logInButtonWrapper: {
    alignSelf: 'flex-end'
  },
  fyg: {
    opacity: 0.5,
  },
})
// end of styles

class Explore extends Component {
  logout = () => {
    this.props.screenProps.deleteJWT()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Explore Screen</Text>
        <View>
          <Button
            title='LOGOUT'
            color='#fff'
            onPress={this.logout}
          />
        </View>
      </View>
    )
  }
}

export default Explore
