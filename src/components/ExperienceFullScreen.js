import React, {Component} from 'react'
import { Dimensions, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import landingStyles from '../styles/landingStyles'
import { LinearGradient } from 'expo'
import { Ionicons, SimpleLineIcons, Feather } from '@expo/vector-icons'
import Stars from '../components/Stars'
import { formatLocationObject, formatReviewsCountText } from '../helpers/strings'
// import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'
import { Query, Mutation } from 'react-apollo'
import { UPDATE_FAVORITES } from '../mutations'
const { width, height } = Dimensions.get('window')

class ExperienceFullScreen extends Component {
  state = {
    isFavorite: false
  }

  componentDidMount() {
    this.setState({isFavorite: this.props.isFavorite})
  }

  updateFavoriteState = (favoritesList, itemId) => {
    this.setState({isFavorite: favoritesList.includes(itemId) })
  }

  render () {
    let { isFavorite } = this.state
    let {item, nav, previous} = this.props
    return (
      <View>
        <ScrollView
          onScroll={x => {
            let currentOffset = x.nativeEvent.contentOffset.x
            let total = width * 4
            let currentImage = currentOffset / total * 4
          //  this.refs[i].style.display = 'block';
          }}
          scrollEventThrottle={4}
          bounces={false}
          style={{width, height}}
          horizontal pagingEnabled >
          {item.media.map((media, index) => <Image key={index} source={{uri: media}} style={{ height, width }} />)}

        </ScrollView>

        <LinearGradient
          pointerEvents='box-none'
          colors={['transparent', 'rgba(0,0,0,1.0)']}
          start={[0.5, 0.2]}
          end={[0.5, 1.0]}
          style={{ height, width, position: 'absolute' }}
        >
          {/* PARENT */}
          <View
            pointerEvents='box-none'
            style={{ position: 'relative', justifyContent: 'space-between', flex: 1 }}>

            <View pointerEvents='box-none' style={[landingStyles.topContainer, {flex: 1, alignItems: 'flex-start', padding: 20}]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => (previous) ? nav.navigate(previous) : nav.goBack()}>
                  <Feather
                    name={'arrow-left'}
                    size={30}
                    color={'white'}
                    style={{ paddingRight: 15 }}
                  />
                </TouchableOpacity>
                <Text style={[landingStyles.activityType, {padding: 2}]}>
                  {item.activityType.toUpperCase()}
                </Text>
              </View>
              <Text style={landingStyles.price}>
              ${item.basePricePerPerson}
              </Text>
            </View>
            {/* Bottom */}
            <View pointerEvents='box-none' style={{
              flex: 1,
              justifyContent: 'space-evenly',
              borderLeftWidth: 5,
              borderLeftColor: 'rgba(227, 60, 54, 1)'}}
            >
              <View
                pointerEvents='box-none'
                style={{
                  flex: 1,
                  justifyContent: 'space-evenly',
                  padding: 20 }}>
                {/********************************************************/}
                <View style={[landingStyles.bottomContainerIcons, {paddingBottom: 0, paddingHorizontal: 0}]}>
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
                          .then(({data: { updateUserFavorites: {favorites}}}) =>
                            (this.updateFavoriteState(favorites, item._id)))
                        }}
                      >
                        {
                          isFavorite
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
                {/********************************************************/}
                <View>
                  <Text style={landingStyles.location}>{formatLocationObject(item.location)}</Text>
                  <Text style={[landingStyles.title, {paddingBottom: 0}]}>{item.title}</Text>
                </View>
                {/********************************************************/}
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
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
                      {item.languages}
                    </Text>
                  </View>
                  <View style={landingStyles.iconTextContainer}>
                    <Stars reviews={item.reviews} />
                    <Text style={landingStyles.smallTextBottom}>
                      {formatReviewsCountText(item.reviews)}
                    </Text>
                  </View>
                </View>
                {/********************************************************/}
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                  {item.media.map((_, index) =>
                    <View key={index} style={{height: 0.5, width: 55 * (5 / item.media.length), backgroundColor: 'white'}} />)}
                </View>
                {/********************************************************/}
                <Text style={{color: 'white'}}>{item.included}</Text>
                <Text style={{ color: 'white' }}>{item.overview}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    )
  }
}
export default ExperienceFullScreen
