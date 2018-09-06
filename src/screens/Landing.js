import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import { CURRENT_USER, TOP_TRENDING, HIGHEST_RATED, WEEKEND_PICKS, BEST_VALUE, MOST_VIEWED } from '../queries'
import { UPDATE_FAVORITES } from '../mutations'
import Carousel from 'react-native-snap-carousel'
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native'
import { LinearGradient } from 'expo'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import Stars from '../components/Stars'
import landingStyles from '../styles/landingStyles'
import { formatLocationObject, formatReviewsCountText } from '../helpers/strings'

let { width, height } = Dimensions.get('window')

let categories = [
  [ 'Top Trending', TOP_TRENDING ],
  [ 'Highest Rated', HIGHEST_RATED ],
  [ 'Best Value', BEST_VALUE ],
  [ 'Weekend Picks', WEEKEND_PICKS ],
  [ 'Most Viewed', MOST_VIEWED ]
]

let offset = 0
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
let cardHeight = {
  ...ifIphoneX(
    {
      height: height - 290,
      scrollViewInterval: height - 270
    },
    {
      height: height - 230,
      scrollViewInterval: height - 210
    }
  )
}
export default class Landing extends Component {

  state = {
    search: 'Search By City or Activity',
    favorites: [],
    category: categories[0][0],
    fromTop: 0,
  }

  componentDidMount () {
    this.setState({favorites: this.props.screenProps.userInfo.favorites})
    this.onSwipeUp(0)
  }

  favoritesController = () => {

  }

  onSwipeUp = (top, direction) => {
    let index =
      direction === 'down'
        ? Math.floor(top / cardHeight.scrollViewInterval)
        : Math.ceil(top / cardHeight.scrollViewInterval)

    return this.setState({
      category: categories[index][0]
    })
  }

  _renderItem = ({ item, index }) => {
    let me = this
    return (
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.75}>
        <View
          style={{
            flex: 1,
            shadowOffset: { width: 2, height: 1 },
            shadowColor: 'black',
            shadowOpacity: 0.8
          }}>
          <ImageBackground
            source={{uri: item.media[0]}}
            imageStyle={{ borderRadius: 10 }}
            style={{
              flex: 1
            }}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,1.0)']}
              start={[0.5, 0.2]}
              end={[0.5, 1.0]}
              style={{
                flex: 1,
                justifyContent: 'space-between',
                borderRadius: 10
              }}>
              <View style={landingStyles.topContainer}>
                <Text style={landingStyles.activityType}>
                  {item.activityType.toUpperCase()}
                </Text>
                <Text style={landingStyles.price}>
                  ${item.basePricePerPerson}
                </Text>
              </View>
              <View>
                <View style={landingStyles.bottomContainerIcons}>
                  <TouchableOpacity>
                    <Ionicons
                      name={'ios-share-outline'}
                      size={25}
                      color={'white'}
                      style={{ paddingRight: 15 }}
                    />
                  </TouchableOpacity>
                  <Mutation mutation={UPDATE_FAVORITES}>
                    { (updateUserFavorites, { data }) => (
                      <TouchableOpacity
                        onPress={() => {
                          updateUserFavorites({ variables: { experienceId: item._id } })
                            .then(({data: { updateUserFavorites: {favorites} }}) => me.setState({ favorites }))
                        }}
                      >
                        {
                          me.state.favorites.includes(item._id)
                            ? <Ionicons
                              name={'ios-heart'}
                              size={25}
                              color={'red'}
                            />
                            : <Ionicons
                              name={'ios-heart-outline'}
                              size={25}
                              color={'white'}
                            />
                        }
                      </TouchableOpacity>
                    )
                    }
                  </Mutation>
                </View>
                <View style={[landingStyles.bottomContainer, {borderBottomLeftRadius: 10}]}>
                  <View
                    style={{
                      borderBottomColor: 'rgba(255, 255, 255, .3)',
                      borderBottomWidth: 1
                    }}>
                    <Text style={landingStyles.location}>{formatLocationObject(item.location)}</Text>
                    <Text style={landingStyles.title}>{item.title}</Text>
                  </View>
                  <View style={landingStyles.lastContainer}>
                    <View style={landingStyles.iconTextContainer}>
                      <SimpleLineIcons
                        name='hourglass'
                        size={12}
                        color='white'
                      />
                      <Text style={landingStyles.smallTextBottom}>
                        {Math.round((item.duration / 60) % 60)}
                        :00
                      </Text>
                    </View>
                    <View style={landingStyles.iconTextContainer}>
                      <Ionicons
                        name='ios-chatbubbles-outline'
                        size={12}
                        color='white'
                      />
                      <Text style={landingStyles.smallTextBottom}>
                        {item.languages[0]}
                      </Text>
                    </View>
                    <View style={landingStyles.iconTextContainer}>
                      <Stars reviews={item.reviews} />
                      <Text style={landingStyles.smallTextBottom}>
                        {formatReviewsCountText(item.reviews)}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    let { userFetched } = this.state
    let search = this.props.navigation.state.params ? (
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          paddingLeft: 10,
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          padding: 2
        }}>
        {this.props.navigation.state.params.search.length > 0 ? (
          this.props.navigation.state.params.search
        ) : (
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              paddingLeft: 10,
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              padding: 2,
              color: '#9b9b9b'
            }}>
            {this.state.search}
          </Text>
        )}
      </Text>
    ) : (
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          paddingLeft: 10,
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          padding: 2,
          color: '#9b9b9b'
        }}>
        {this.state.search}
      </Text>
    )

    return (
      <Query query={CURRENT_USER}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return (
            <View style={landingStyles.parent}>
              <View>
                <View style={styles.container}>
                  <Image
                    style={styles.searchImage}
                    resizeMode='contain'
                    source={require('../assets/img/Search.png')}
                  />
                  <TouchableOpacity
                    style={{ flex: 1, width: '100%' }}
                    onPress={() => {
                      this.props.navigation.navigate('Search')
                    }}>
                    {search}
                  </TouchableOpacity>
                </View>
              />
              </View>
              <View style={landingStyles.wrapper}>
                <Text style={landingStyles.TopText}>{this.state.category}</Text>
                <TouchableOpacity
                  style={landingStyles.viewAll}
                  onPress={() =>
                    this.props.navigation.navigate('Preview', {
                      category: this.state.category
                    })
                  }>
                  <Text style={landingStyles.viewAllText}>View All</Text>
                  <Ionicons
                    name='md-arrow-forward'
                    size={30}
                    color='rgba(48, 55, 64, 1)'
                  />
                </TouchableOpacity>
              </View>
              <ScrollView
                decelerationRate={0}
                alwaysBounceVertical={false}
                bounces={false}
                snapToInterval={cardHeight.scrollViewInterval}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                onScroll={x => {
                  let currentOffset = x.nativeEvent.contentOffset.y
                  let direction = currentOffset >= offset ? 'up' : 'down'
                  offset = currentOffset

                  this.onSwipeUp(currentOffset, direction)
                }}
                scrollEventThrottle={1}>

                {
                  categories.map((category, index) =>
                    (<View key={index} style={{ flex: 1, height: cardHeight.height, marginBottom: 20 }}>
                      <Query query={category[1]}>
                        {({loading, error, data}) => {
                          if (loading) return 'Loading...'
                          if (error) return `Error! ${error.message}`
                          let exps = data.getExperiences.slice(0, 5)
                          return (
                            <Carousel
                              data={exps}
                              renderItem={this._renderItem}
                              sliderWidth={width}
                              extraData={this.state.favorites}
                              itemWidth={width - 50}
                              removeClippedSubviews
                            />
                          )
                        }}
                      </Query>
                    </View>))
                }
              </ScrollView>
            </View>
          )
        }}
      </Query>
    )
  }
}
