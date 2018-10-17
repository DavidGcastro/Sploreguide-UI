import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { ifIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Divider } from 'react-native-elements'
import { Query, Mutation } from 'react-apollo'
import { CURRENT_USER, ALL_MESSAGES } from '../queries'
import GoBack from '../components/GoBack'
import moment from 'moment';
import { Left } from 'native-base';

export default class Temp4 extends React.Component {
  state = {
    messages: []
  }

  componentWillMount() {
  }

  _onPress = () => {
    console.log('hey there')
  };




  render() {

    function Unix_timestamp(t) {
      var dt = new Date(t * 1000);
      var hr = dt.getHours() % 12;
      var m = "0" + dt.getMinutes();
      var s = "0" + dt.getSeconds();
      return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
    }

    return (
      <Query query={CURRENT_USER}>
        {({ loading, error, data }) => {
          if (loading) return "Loading..."
          if (error) return `Error! ${error.message}`
          let id = data.currentUser._id
          let firstName = data.currentUser.firstName
          let lastName = data.currentUser.lastName
          console.log(id)
          return (
            <Query query={ALL_MESSAGES}
              variables={{ input: { receiver: id } }}
              pollInterval={200}
            >
              {({ loading, error, data }) => {
                let idArray = []
                data.allMessages ? data.allMessages.map((message) => idArray.push({ userFirstName: firstName, _id: message._id, userLastName: lastName, time: message.time_created, currentId: id, user: { _id: message._id, senderId: message.sender, text: message.content, key: message.firstName + ' ' + message.lastName } })) : null
                console.log(data)
                if (loading) return "Loading..."
                if (error) return `Error! ${error.message}`
                return (
                  <View style={styles.container}>
                    <Text style={styles.header}> Messages</Text>

                    <Divider style={{ height: 3, backgroundColor: '#DCDCDC' }} />

                    <FlatList
                      keyExtractor={(item, index) => index.toString()}
                      style={{ marginTop: 25 }}
                      data={idArray}
                      renderItem={({ item, separators }) =>
                        <TouchableHighlight

                          onPress={() =>
                            this.props.navigation.navigate('Message',
                              { item, previous: 'Temp4', swipeUp: false })}
                          onShowUnderlay={separators.highlight}
                          onHideUnderlay={separators.unhighlight}
                        >

                          <View style={{ backgroundColor: 'white', height: 45, margin: 5 }}>
                          <View style={styles.row}>
                          <Text style={{ fontStyle: 'normal', fontSize: 21 }}>{item.user.key}</Text>
                          <Text style={styles.time}>{Unix_timestamp(item.time)}</Text>
                          </View>
                            <Text style={{ color: 'grey', fontSize: 15 }}>{item.user.text.length > 26 ? item.user.text.slice(0, 26) + '...' : item.user.text}</Text>

                          </View>
                        </TouchableHighlight>}
                    />

                  </View>
                )
              }}
            </Query>
          )
        }}
      </Query>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...ifIphoneX(
      {
        paddingTop: getStatusBarHeight() + 20
      },
      {
        paddingTop: 30,
        paddingBottom: 0
      }
    ),
    backgroundColor: 'white'
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  time: {
    marginTop: 7
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
    alignSelf: 'flex-start',
    fontSize: 28,
    height: 50,
    fontFamily: 'Gill Sans',
    marginLeft: 20
  }
})