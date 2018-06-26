import React, {Component} from 'react'
import propTypes from 'prop-types'
import colors from '../../styles/colors'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'

export default class TextInputField extends Component {
  static propTypes = {
    borderBottomColor:propTypes.string,
    inputType: propTypes.string.isRequired,
    innerOnChangeText: propTypes.func.isRequired,
    innerReturnKeyType: propTypes.string.isRequired,
    inputIcon: propTypes.string,
    placeholderText: propTypes.node,
    innerValue: propTypes.node,
    innerOnSubmitEditing: propTypes.func,
    inputError: propTypes.string
  }

  state = {
    secureInput: 
      this.props.inputType === 'text' || 
      this.props.inputType === 'name' || 
      this.props.inputType ==='email' 
      ? false : true,
  }

  toggleShowPassword = () => {
    this.setState({ secureInput: !this.state.secureInput });
  }

  getFocus = (event) => {
    this.refs.innerTextInput.focus()
  }

  updateText = (input) => {
    this.props.innerOnChangeText(input)
  }

  render () {
    const { 
      borderBottomColor, inputError,
      inputType, innerOnSubmitEditing, innerReturnKeyType, 
      inputIcon, innerValue, placeholderText } = this.props
    const borderBottom = borderBottomColor || colors.gray
    const { secureInput } = this.state

    return (
      <View style={styles.wrapper}>
              
        { inputIcon && inputIcon === 'email-outline' &&
          <MaterialCommunityIcons name="email-outline" size={20} color="gray" style={styles.inputIcon} />
        }
        { inputIcon && inputIcon === 'unlock' &&
          <EvilIcons name="unlock" size={30} color="gray" style={styles.inputIconLock} />
        }

        <TextInput
          ref='innerTextInput'
          value={innerValue}
          onChangeText={this.updateText}
          returnKeyType={innerReturnKeyType}
          style={[{borderBottomColor: borderBottom}, styles.inputField]}
          placeholder={placeholderText}
          onSubmitEditing={innerOnSubmitEditing}
          secureTextEntry={secureInput}/>

          {inputType === 'password' ? 
            <TouchableOpacity 
              style={styles.showButton}
              onPress={this.toggleShowPassword}>
              <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
            :null
          }

          {inputError && 
            <Text style={styles.inputError}>
              {inputError}
            </Text>
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    height: 50
  },
  inputField: {
    borderBottomWidth: .8,
    paddingTop:0,
    paddingBottom: 0,
    marginLeft: 55,
    marginRight:50,
    marginBottom: -1,
    paddingLeft:23
  },
  inputIcon: {
    position: 'absolute', 
    top: -1,
    left: 55
  },
  inputIconLock: {
    position: 'absolute', 
    top: -5,
    left: 49
  },
  showButton:{
    position: 'absolute',
    right: 50,
    top: -7,
  },
  showButtonText:{
    color: colors.gray,
    fontWeight: '500',
  },
  inputError: {
    position: 'absolute',
    top: 18,
    left: 60,
    fontSize: 12,
    color: 'red'
  }
});