import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './facebook';
import Instagram from './insta';
import {createAppContainer} from 'react-navigation';
import  {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render() {
  return (
    <View style={{margin:0}}>
      <AppContainer/>
    </View>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook :{screen: Facebook},
  Instagram : {screen : Instagram}
});
const AppContainer = createAppContainer(
  TabNavigator
);

const styles = StyleSheet.create({});
