/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    AlertIndicatorIOS,
    ActivityIndicatorIOS,
    AlertIOS,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from 'react-native';
import PaginationList from './PaginationList';
import PropTypes from 'prop-types';


const { width, height } = Dimensions.get('window');


export default class UserList extends Component {
	state = {
		scrollY	: new Animated.Value(0)
	}

	// static propTypes = {
	// 	animationRange	:	PropTypes.object.isRequired,
	// 	// experience		:	PropTypes.object.isRequired
	// };

	static defaultProps = {
	    scrollRangeForAnimation	:	200,
	    _scrollView				:	null,
	};

	animationRange = this.state.scrollY.interpolate({
	            inputRange: [0, this.props.scrollRangeForAnimation],
	            outputRange: [0, 1],
	            extrapolate: 'clamp',
	        });

	animateHeader =	{	transform: [
		            {
		                translateY: this.animationRange.interpolate({
		                    inputRange: [0, 1],
		                    outputRange: [0, -300],
		                })
		            }
	        	]
	        };

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

    constructor(props) {
        super(props);

        const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
	    	const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

		    const ds = new ListView.DataSource({
		      rowHasChanged: (r1, r2) => r1 !== r2,
		      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
		      getSectionData,
		      getRowData,
		    });

		    const { dataBlob, sectionIds, rowIds } = this.getData();
		    this.state = {
		      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
		    };

    }

    getData() {
    	const dataBlob = {};
    	const sectionIds = [0,1];
    	const rowIds = [];
    	dataBlob[sectionIds[0]] = { animationRange: this.animationRange, id: 0};
    	dataBlob[sectionIds[1]] = { animationRange: this.animationRange, id: 1};

    	rowIds.push([]);

    	for(let i = 0; i < 1; i++){
    		const rowId = `${sectionIds[0]}:${i}`;
    		rowIds[rowIds.length - 1].push(rowId);
    		dataBlob[rowId] = { row: i };
    	}
    	rowIds.push([]);

    	for(let i = 0; i < 20; i++){
    		const rowId = `${sectionIds[1]}:${i}`;
    		rowIds[rowIds.length - 1].push(rowId);
    		dataBlob[rowId] = { row: i };
    	}

    	return { dataBlob, sectionIds, rowIds };
    }



    
 
    render() {

		return (
    		// <Animated.View style={[stylesSection.container, this.animateHeader]}>

		      <ListView
		      	ref={scrollView => {
				                this.props._scrollView = scrollView ? scrollView._component : null;
				}}
		      	scrollEventThrottle={16}
	            onScrollEndDrag={this.onScrollEndSnapToEdge}
	            onMomentumScrollEnd={this.onScrollEndSnapToEdge}
	            onScroll={(event) => {

	            	this.state.scrollY = event.nativeEvent.contentOffset.y;
	            	console.log(this.state.scrollY);
	            	// Animated.event(
		            //     [
		            //         {
		            //             nativeEvent: {contentOffset: {y: this.state.scrollY}},
		            //         },
		            //     ],
		            //     {
		            //         useNativeDriver: true,
		            //     }
	            	// )
	            }}
		        style={stylesSection.container}
		        dataSource={this.state.dataSource}
		        renderRow={(data) => <Row {...data} />}
		        renderSeparator={(sectionId, rowId) => <View key={rowId} style={stylesSection.separator} />}
		        // renderHeader={() => <Header />}
		        // renderFooter={() => <Footer />}
		        renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
		      />
    		// </Animated.View>

	    );
    }

    
};


const stylesSection = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    zIndex:1
  },
  text: {
    fontSize: 13,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

const SectionHeader = (props) => {
	const { animationRange, id } = props;

	if (id == 0) {
		return (
		  <View style={[stylesSection.container, {height:height}]}>
		  	<PaginationList animationRange={animationRange} max={height-400} min={height/3} />
		  </View>
		);
	} else {
		return (
		  <View style={[stylesSection.container, {height:height/2}]}>
		  	<PaginationList animationRange={animationRange} max={height-400} min={height/3} />
		  </View>
		);
	}


}

const stylesRow = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Row = (props) => (
  <View style={stylesRow.container}>
    <Text style={stylesRow.text}>
      {`${props.row}`}
    </Text>
  </View>
);

