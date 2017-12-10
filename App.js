import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// --- native base
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
  Icon
} from 'native-base'
import { DrawerNavigator , StackNavigator } from 'react-navigation'


// --- Component
import ProfileScreen from './component/Profile'
import Hero from './component/Hero'
import SingleHeroes from './component/SingleHeroes'

const ProfileStack = StackNavigator({
  profile: {screen: ProfileScreen},
} , {
  headerMode: 'none'
})

const HeroStack = StackNavigator({
  heroes: {screen: Hero},
  single: {path: 'SingleHeroes/:heroes' , screen: SingleHeroes},
} , {
  headerMode: 'none'
})

const DrawerHome = DrawerNavigator({
  Home: {screen: HeroStack},
  Profile: {screen: ProfileStack}
})

export default class App extends React.Component {
  render() {
    return (
      <DrawerHome />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
