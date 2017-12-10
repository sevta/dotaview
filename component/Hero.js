'use strict';

import React, { Component } from 'react';
import { themes } from '../style'

import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

// --- Native Base Component
import { Container , 
  Header , 
  Content , 
  Tab , 
  Tabs , 
  Body , 
  Title ,
  Drawer , 
  Left , 
  Button , 
  Icon , 
  Card , 
  CardItem , 
  Text , 
  List , 
  ListItem , 
  Thumbnail , 
  Right
} from 'native-base'

import axios from 'axios'

const Screen1 = props => 
	<Container>
		<Content>
			<List bordered dataArray={props.heroes}
				renderRow={(item) => (
					<ListItem avatar>
						<Left>
							<Thumbnail size={80} source={{ uri: `http://cdn.dota2.com/${item.img}` }} />
						</Left>
						<Body>
							<Text>{item.localized_name}</Text>
							<Text note> Lorem ipsum dolor sit amet, consectetur </Text>
						</Body>
						<Right>
							<Button style={{marginTop: 12 , backgroundColor: 'dodgerblue'}} rounded success small onPress={() => props.press(item)}>
								<Text note style={{color: 'white'}}>View</Text>
							</Button>	
						</Right>
					</ListItem>
				)}
			>
			</List>
		</Content>
	</Container>

class Home extends Component {
	constructor(props) {
	  super(props);
	  this.state = { fontsReload: false , heroes: []};
	}

	async componentWillMount() {
		await Expo.Font.loadAsync({
			'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
		})
		this.setState({fontsReload: true})
		axios.get('https://api.opendota.com/api/heroStats')
			.then(res => {
				this.setState({heroes: res.data})
			})
			.catch(err => {
				console.log(err)
			})
	} 

  render() {
  	if (this.state.fontsReload) {
  		return (
	      <Container>
		      <Header hashTabs
		        noShadow={true}
		        style={{backgroundColor: themes.primary}}
		        androidStatusBarColor='dodgerblue'
		      >
		        <Left>
		          <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
		            <Icon ios='md-menu' android='md-menu' style={{fontSize: 20 , color: 'white'}}/>
		          </Button>
		        </Left>
		        <Body style={{marginLeft: -130}}>
		          <Text style={{color: 'white' , fontSize: 18}}>Home</Text>
		        </Body>
		      </Header>
		      <Tabs>
		        <Tab heading='Heroes Stats'
		          textStyle={{color: 'white'}}
		          tabStyle={{backgroundColor: themes.primary}}
		          activeTabStyle={{backgroundColor: themes.primary}}
		          activeTextStyle={{color: 'white'}} >
			        	<Screen1 
			        		heroes={this.state.heroes} 
			        		press={(item) => this.props.navigation.navigate('single' , {heroes: item})} />
		        </Tab>
		        <Tab heading='ALl'
		          textStyle={{color: 'white'}}
		          tabStyle={{backgroundColor: themes.primary}}
		          activeTabStyle={{backgroundColor: themes.primary}}
		          activeTextStyle={{color: 'white'}} >
			          <Text>Hay</Text>
		        </Tab>
		      </Tabs>
		    </Container>	
  		)
  	} else {
  		return (
				<Container style={{flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
					<ActivityIndicator />
				</Container>
  		)
  	}
  }
}

const styles = StyleSheet.create({

});


export default Home;

// --- update indentation