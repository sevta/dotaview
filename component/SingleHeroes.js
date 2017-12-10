'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import {
	Content , 
	Header , 
	Tabs , 
	Tab , 
	Left ,
	Button , 
	Container ,
	Icon ,
	Body , 
	Card , 
	CardItem
} from 'native-base'

import { NavigationActions } from 'react-navigation'

class SingleHeroes extends Component {
	componentWillMount() {
		console.log(this.props.navigation.state.params.heroes.icon)
	}

  render() {
  	const { heroes } = this.props.navigation.state.params
    return (
    	<Container>
    		<Header
				 androidStatusBarColor='dodgerblue'
    		 noShadow hashTabs style={{backgroundColor: 'transparent' , position: 'absolute' , zIndex: 2}}>
					<Left>
						<Button transparent>
							<Icon name='arrow-back' onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
						</Button>
					</Left>
					<Body>
						<Text style={{color: 'white' , fontSize: 18 , marginLeft: -80}}>{heroes.localized_name}</Text>
					</Body>
    		</Header>
    		<Container>
		    	<Content>
	    			<View style={styles.header}>
	    				<View style={styles.banner}>
	    					<Image 
									style={{width: '100%' , height: '100%'}}
									source={{uri:`http://cdn.dota2.com/${heroes.img}` }}
	    					/>
	    				</View>
	    				<View style={styles.img}>
		    				<Image 
									style={{width: '100%' , height: '100%'}}
									source={{uri: `http://cdn.dota2.com/${heroes.icon}`}}
		    				/>
	    				</View>
	    			</View>
	    			<View style={{width: '100%' , flex: 1, position: 'relative' , backgroundColor:'tomato'}}>
		    			<CardItem>
	              <Body>
	                <Text>
	                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere tenetur eos distinctio earum voluptate maxime mollitia, placeat expedita aliquam officiis et voluptates quam est cum! Earum sed illo alias?
	                </Text>
	              </Body>
	            </CardItem>
    				</View>
	    		</Content>
    		</Container>
    	</Container>
    );
  }
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 270,
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: 'dodgerblue',
	},
	img: {
		width: 60,
		height: 60,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: 'white',
		overflow: 'hidden',
		position: 'absolute',
		right: 20,
		top: 15
	},
	banner: {
		width: '100%',
		height: 270,
		position: 'absolute',
		bottom: 0,
		left: 0,
	}
});


export default SingleHeroes;


// --- update indentation