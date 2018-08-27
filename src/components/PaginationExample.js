import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Animated,
  Image,
  ScrollView
} from 'react-native';
import ContactItem from './widgets/ContactItem'; // https://github.com/garrettmac/react-native-pagination/blob/master/ReactNativePaginationExample/Pages/widgets/ContactItem.js
import faker from 'faker'; //assuming you have this.
import _ from 'lodash';
import Pagination, { Icon, Dot } from 'react-native-pagination'; //{Icon,Dot} also available
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

//lets use faker to create mock data
let MockPersonList = new _.times(35, i => {
  return {
    id: i,
    index: i,
    name: faker.name.findName(),
    avatar: faker.internet.avatar(),
    group: _.sample(['Family', 'Friend', 'Acquaintance', 'Other']),
    email: faker.internet.email()
  };
});

const deviceWidth = Dimensions.get('window').width;
const FIXED_BAR_WIDTH = 280;
const BAR_SPACE = 10;

const images = [
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg'
];

export default class PaginationExample extends Component {
  numItems = images.length;
  itemWidth = FIXED_BAR_WIDTH / this.numItems - (this.numItems - 1) * BAR_SPACE;
  animVal = new Animated.Value(0);

  static propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    animationRange: PropTypes.object.isRequired
    // experience		:	PropTypes.object.isRequired
  };

  static defaultProps = {
    max: height / 4,
    min: height / 8
  };

  animateHeader = {
    transform: [
      {
        translateY: this.props.animationRange.interpolate({
          inputRange: [0, 1],
          outputRange: [0, this.props.min - this.props.max]
        })
      }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      items: MockPersonList
    };
  }
  //create each list item
  _renderItem = ({ item }) => {
    return (
      <ContactItem
        index={item.id}
        onPressItem={this.onPressItem}
        name={item.name}
        avatar={item.avatar}
        description={item.email}
        tag={item.group}
        createTagColor
      />
    );
  };
  //pressed an item
  onPressItem = item => console.log('onPressItem:item ', item);

  //map to some od. We use the "id" attribute of each item in our list created in our MockPersonList
  _keyExtractor = (item, index) => item.id.toString();

  // REQUIRED for ReactNativePagination to work correctly
  onViewableItemsChanged = ({ viewableItems, changed }) =>
    this.setState({ viewableItems });

  render() {
    const { min, max } = this.props;

    let imageArray = [];
    let barArray = [];
    images.forEach((image, i) => {
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{ uri: image }}
          style={{ width: deviceWidth }}
        />
      );
      imageArray.push(thisImage);

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp'
      });

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE
            }
          ]}>
          <Animated.View
            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [{ translateX: scrollBarVal }]
              }
            ]}
          />
        </View>
      );
      barArray.push(thisBar);
    });

    return (
      <Animated.View
        style={[
          styles.headerBackground,
          this.animateHeader,
          { height: max - 150 }
        ]}>
        ;
        <View>
          <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: this.animVal } } }
            ])}>
            {imageArray}
          </Animated.ScrollView>
          <View style={styles.barContainer}>{barArray}</View>
        </View>
        )
      </Animated.View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    width: width,
    height: height / 3
    // backgroundColor:"grey",//<-- use with "dotThemeLight"
  }
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 0,
    zIndex: 2,
    width: '100%',
    backgroundColor: 'transparent',

    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBackground: {
    position: 'absolute',
    flex: 0,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 2
  }
});

const test = (
  <View>
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={10}
      pagingEnabled
      onScroll={Animated.event([
        { nativeEvent: { contentOffset: { x: this.animVal } } }
      ])}>
      {{
        /*imageArray*/
      }}
    </Animated.ScrollView>
    <View style={styles.barContainer}>
      {{
        /*barArray*/
      }}
    </View>
  </View>
);
