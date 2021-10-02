import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home'
import IssLocationScreen from './screens/isslocation'
import MeteorScreen from './screens/Meteors'

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown:true}}>

          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="IssLocation" component={IssLocationScreen} />
          <Stack.Screen name="Meteor" component={MeteorScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}