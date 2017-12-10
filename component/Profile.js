'use strict';

import React, { Component } from 'react';
import { themes } from '../style'

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import {
	Content ,
	Container , 
	Header , 
	Body , 
	Title , 
	Left , 
	Button ,
	Icon
} from 'native-base'

class ProfileScreen extends Component {
  render() {
    return (
    	<Container>
    		<Header noShadow style={{backgroundColor: 'white'}}>
    			<Left>
    				<Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
							<Icon ios='md-menu' android='md-menu' style={{fontSize: 20 , color: 'dodgerblue'}} />
    				</Button>
    			</Left>
    			<Body style={{marginLeft: -130}}>
    				<Text style={{color: 'dodgerblue',fontSize: 18}}>Profile</Text>
    			</Body>
    		</Header>
    		<Content>
    			<View style={styles.header}>
    				<Text>klj</Text>
    				<View style={styles.img}>
	    				<Image 
								style={styles.img}
	    				/>
    				</View>
    			</View>
    		</Content>
    	</Container>
    );
  }
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 200,
		backgroundColor: 'white',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	img: {
		width: 90,
		height: 90,
		borderRadius: 50,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: 'dodgerblue'
	}
});


export default ProfileScreen;


// --- update indentation