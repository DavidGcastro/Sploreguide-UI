/*
* @Author: Abhi
* @Date:   2018-07-09 14:15:21
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-26 12:33:40
*/

import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Animated
} from 'react-native';

import { defaultStyles, experienceStyle } from '../styles/styles';
import Price from './subheadings/Price'
import Reviews from './subheadings/Reviews'

import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons'

import NavBackButton from './NavBackButton';
import ExperienceHeader from './ExperienceHeader';
import ItemInScroll from './ItemInScroll';

// import Pagination,{ Icon, Dot } from 'react-native-pagination';
import PaginationExample from './PaginationExample';
import UserList from './UserList';
import Pagination from './Pagination';


// Get screen dimensions
const { width, height } = Dimensions.get('window');

// const HeaderPlaceholder = <View style={{flex: 0, height: 100, width: '100%'}} />;

export  default class Experience extends Component {
	state = {
		scrollY	: new Animated.Value(0)
	}

	// Component prop types
	static propTypes = {
		// experience object with title, genre, and poster
		experience	:	PropTypes.object.isRequired,
		onBackPress	:	PropTypes.func.isRequired
	};

	static defaultProps = {
	    scrollRangeForAnimation	:	height,
	    _scrollView				:	null,
	};

	animationRange = this.state.scrollY.interpolate({
	            inputRange: [0, this.props.scrollRangeForAnimation],
	            outputRange: [0, 1],
	            extrapolate: 'clamp',
	        });

    onScrollEndSnapToEdge = (event) => {
        const y = event.nativeEvent.contentOffset.y;
        if (0 < y && y < this.props.scrollRangeForAnimation / 2) {
            if (this.props._scrollView) {
                this.props._scrollView.scrollTo({y: 0});
            }
        } else if (this.props.scrollRangeForAnimation / 2 <= y && y < this.props.scrollRangeForAnimation) {
            if (this.props._scrollView) {
                this.props._scrollView.scrollTo({y: this.props.scrollRangeForAnimation});
            }
        }
    };

   render() {
   	const { experience, onBackPress } = this.props;
		return (
		    <View style={styles.container} pointerEvents="box-none"> 
          <View style={{flex: .925}}>             
			        <Animated.ScrollView  
			        	showsVerticalScrollIndicator={false}          
			            style={styles.scrollView}
			            ref={scrollView => {
			                this.props._scrollView = scrollView ? scrollView._component : null;
			            }}
			            scrollEventThrottle={16}
			            onScrollEndDrag={this.onScrollEndSnapToEdge}
			            onMomentumScrollEnd={this.onScrollEndSnapToEdge}
			            onScroll={Animated.event(
			                [
			                    {
			                        nativeEvent: {contentOffset: {y: this.state.scrollY}},
			                    },
			                ],
			                {
			                    useNativeDriver: true,
			                }
			            )}
			            >

			        	{/* Map each experience Detail to an Item in Scroll */}
			            <ItemInScroll numberOfItem={2} />
			            <ItemInScroll numberOfItem={1} />

			        </Animated.ScrollView> 
	       			<Pagination experience={experience} animationRange={this.animationRange} max={height/1.25} min={height/3.35} onBackPress={this.props.onBackPress}/>
       			</View>

       			<View style={{flex: .075}}>
       				<View style={{flex:1, backgroundColor: 'red'}}></View>
						</View>

		    </View>    
	 	);

   }

  render2() {
		return (
				<UserList />
			);
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex:1, 
    zIndex: 1,
    backgroundColor: 'transparent'
  }
});
