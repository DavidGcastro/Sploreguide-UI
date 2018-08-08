import React, { Component } from 'react'
import propTypes from 'prop-types'
import colors from '../../styles/colors'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

export default class TextInputField extends Component {
  static propTypes = {
    borderBottomColor:propTypes.string,
    secureInput: propTypes.bool,
    innerOnChangeText: propTypes.func.isRequired,
    innerReturnKeyType: propTypes.string.isRequired,
    inputIcon: propTypes.string,
    placeholderText: propTypes.node,
    innerValue: propTypes.node,
    innerOnSubmitEditing: propTypes.func,
    inputError: propTypes.string,
    notEditable: propTypes.bool,
    innerOnFocus: propTypes.func
  }

  state = {
    secureInput: this.props.secureInput,
    secureText: 'Show'
  }

  toggleShowPassword = () => {
    if (this.state.secureText === 'Show')
      return this.setState({ secureInput: !this.state.secureInput, secureText: 'Hide' })

    return this.setState({ secureInput: !this.state.secureInput, secureText: 'Show' })
  
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
      innerOnSubmitEditing, innerReturnKeyType, 
      inputIcon, innerValue, placeholderText, 
      notEditable, innerOnFocus } = this.props
    const borderBottom = borderBottomColor || colors.gray
    const { secureInput, secureText } = this.state
    let editable = (notEditable) ? false : true

    return (
      <View style={styles.wrapper}>
              
        { inputIcon && inputIcon === 'email-outline' &&
          <MaterialCommunityIcons name="email-outline" size={20} color="gray" style={styles.inputIcon} />
        }
        { inputIcon && inputIcon === 'unlock' &&
          <EvilIcons name="unlock" size={30} color="gray" style={styles.inputIconLock} />
        }
        { inputIcon && inputIcon === 'ios-person-outline' &&
          <Ionicons name="ios-person-outline" size={25} color="gray" style={styles.nameIcon} />
        }
        { inputIcon && inputIcon === 'calendar' &&
          <EvilIcons name="calendar" size={25} color="gray" style={styles.calendarIcon} />
        }
        { inputIcon && inputIcon === 'v-card' &&
          <Entypo name="v-card" size={17} color="gray" style={styles.genderIcon} />
        }

        <TextInput
          {...this.props}
          ref='innerTextInput'
          value={innerValue}
          onChangeText={this.updateText}
          returnKeyType={innerReturnKeyType}
          style={[{borderBottomColor: borderBottom}, styles.inputField]}
          placeholder={placeholderText}
          onSubmitEditing={innerOnSubmitEditing}
          editable={editable}
          onFocus={innerOnFocus}
          secureTextEntry={secureInput}/>

          { this.props.secureInput ? 
            <TouchableOpacity 
              style={styles.showButton}
              onPress={this.toggleShowPassword}>
              <Text style={styles.showButtonText}>{secureText}</Text>
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
  nameIcon: {
    position: 'absolute',
    top: -4,
    left: 56,
  },
  calendarIcon:{
    position: 'absolute',
    left: 52,
  },
  genderIcon:{
    position: 'absolute',
    left: 56,    
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