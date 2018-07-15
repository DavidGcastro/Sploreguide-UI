/*
* @Author: Abhi
* @Date:   2018-07-07 15:29:01
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-09 14:15:02
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
} from 'react-native';
import { defaultStyles, experienceStyle } from '../styles/styles';
import Price from './subheadings/Price'
import Reviews from './subheadings/Reviews'

import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons'

import CollapsibleToolbar from './CollapsibleToolbar';
import NavBackButton from './NavBackButton';

// import Collapsible from 'react-native-collapsible-header';
import CollapsibleHeader from './CollapsibleHeader';

import Demo from './Demo';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Header</Text>
  </View>
);

const Content = ({ gray }) => {
  const contentStyle = [
    styles.content,
    { backgroundColor: gray ? '#f7f7f7' : '#fff' }
  ];

  return (
    <View style={contentStyle}>
      <Text style={styles.contentText}>Content</Text>
    </View>
  );
};

const color = '#0f9d58';



export default class Experience2 extends Component {
	// Component prop types
	static propTypes = {
		// experience object with title, genre, and poster
		experience: 	PropTypes.object.isRequired,
		onBackPress:	PropTypes.func.isRequired
	}

	renderContent = () => (
        <View>
            {new Array(20).fill().map((_, i) => (
                <View
                    // eslint-disable-next-line
                    key={i}
                    style={{
                        backgroundColor: '#F5F5F5',
                        padding: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#E5E5E5'
                    }}
                >
                    <Text>{`Item ${i + 1}`}</Text>
                </View>
            ))}
        </View>
    );

    renderNavBar = () => (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                backgroundColor: 'red',

            }}
        >
            <NavBackButton title='' onPress={this.props.onBackPress} />

        </View>
    );

    renderToolBar = () => {
    	const { experience, experience: { title, genre, poster, price, location, duration, language, activity_type, reviews, included, overview }, onOpen } = this.props;
    	return (
    		<View style={{flex: 1, height: height, width:width}}>
    			<Image source={{ uri: poster }} style={{
					...StyleSheet.absoluteFillObject, // fill up all space in a container
    			}} />
    		</View>
    	);
    }

    render() {
    	return (
    		<Demo />
    		);
    }


	render0() {
	    return (
	      <CollapsibleHeader
	      	max = {height/3}
	      	min = {10}
	        backgroundColor={color}
	        renderHeader={<Header />}
	        // renderContent is not needed if using FlatList
	        renderContent={
	          <View>
	            <Content />
	            <Content gray />
	            <Content />
	            <Content gray />
	            <Content />
	            <Content gray />
	            <Content />
	            <Content gray />
	            <Content />
	            <Content gray />
	          </View>
	        }

	        // flatList
	        // data={Array(10).fill()}
	        // keyExtractor={(item, i) => String(i)}
	        // renderItem={({ index }) => <Content gray={index % 2 !== 0} />}
	      />
	    );
	}


    render1() {
	    const { experience, experience: { title, genre, poster, price, location, duration, language, activity_type, reviews, included, overview }, onOpen } = this.props;

    	return (
    		<CollapsibleToolbar
                renderContent={this.renderContent}
                renderNavBar={this.renderToolBar}
                renderToolBar={this.renderToolBar}
                // imageSource={poster}
                collapsedNavBarBackgroundColor='green'
                translucentStatusBar
                showsVerticalScrollIndicator={false}
                toolBarHeight={height}

            />
    	);
    }

  	render2() {
	    return (
	      <View style={styles.container}>
	        <ScrollView 
	          contentContainerStyle={styles.scrollContent}
	          // Hide all scroll indicators
	          showsHorizontalScrollIndicator={false}
	          showsVerticalScrollIndicator={false}
	        >
	        {/*		// <ExperienceDetail detail="location" or detail="author"/>
	          {this.props.experiences.map((experience, index) => <PreviewCard 
	            experience={experience}
	            onOpen={this.props.onOpen}
	            key={index}
	          />)}
	        */}
	        </ScrollView>
	      </View>
	    );
	}
}

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 20,         // start below status bar
//   },
//   scrollContent: {
//     flexDirection: 'row',   // arrange posters in rows
//     flexWrap: 'wrap',       // allow multiple rows
//   },
// });

const styles = {
  header: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  headerText: { color: '#fff' },
  content: { alignItems: 'center', justifyContent: 'center' },
  contentText: { color: '#444', padding: 40 }
};