import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { Query, Mutation } from 'react-apollo'
import { CURRENT_USER, GENERATE_CONVERSATION } from '../queries'
import { SEND_MESSAGE } from '../mutations'
import { Divider } from 'react-native-elements'
import GoBack from '../components/GoBack'

export default class Message extends React.Component {
  state = {
    messages: []
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params,"PROPS2")
  }

  loadMessage() {
    this.setState()
  }

  onSend(messages) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    let receiverId = this.props.navigation.state.params.item.currentId
    let senderId = this.props.navigation.state.params.item.user.senderId
    let firstName = this.props.navigation.state.params.item.firstName
    let lastName = this.props.navigation.state.params.item.lastName

    return (
          <Query query={GENERATE_CONVERSATION}
          variables={{ input: {receiver: receiverId, sender: senderId} }}
          pollInterval={200}
          >
          {({ loading, error, data }) => {
            // console.log("dataSsSsS", data)
            let idArray = []
             data.generateConversation ?data.generateConversation.map((message) => idArray.push({ _id: message._id, senderId: message.sender, text: message.content,user: { _id: message.sender, name: message.firstName + ' ' + message.lastName}})) : null
             console.log('Arrayz', idArray)
             console.log('LOG', this.props.navigation.state.params.item.currentId)
          if (loading) return "Loading..."
        if (error) return `Error! ${error.message}`
        return (
          <Mutation mutation={SEND_MESSAGE}
          >
          {(sendMessage, { loading, error }) => (
            <View style={styles.container}>
            <TouchableOpacity
            style={styles.arrow}
            onPress={() => this.props.navigation.navigate('Temp4')}>
              <GoBack color={'black'}/>
            </TouchableOpacity>
            <Text style={styles.header}>{this.props.navigation.state.params.item.user.key}</Text>
            <Divider style={{ height: 3, backgroundColor: '#DCDCDC' }} />
           <GiftedChat
        user={{_id: this.props.navigation.state.params.item.currentId, name: this.props.navigation.state.params.item.firstName}}
        messages={idArray}
        onSend={(messages) => (
          sendMessage({ variables: { content: messages[0].text, firstName: this.props.navigation.state.params.item.userFirstName, lastName: this.props.navigation.state.params.item.userLastName, sender: this.props.navigation.state.params.item.currentId, receiver: this.props.navigation.state.params.item.user.senderId } })
    )}
          />
          </View>
          )}
          </Mutation>
        )
      }}
          </Query>
        )
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: 'white'
  },
  arrow: {
    marginTop: 20
    },
  item: {
    padding: 10,
    fontSize: 18,
    height: 60
  },
  header: {
    alignSelf: 'center',
    fontSize: 25,
    height: 50,
    fontFamily: 'Gill Sans',
  }
})