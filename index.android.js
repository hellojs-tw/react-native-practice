/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ViewSample from './view';
import TextSample from './text';
import ImageSample from './image';
import ButtonSample from './button';
import FlexSample from './flex';
import ListItem from './ListItem';
import ScrollView from './scrollView';
import List from './List';

export default class sample1 extends Component {
  render() {
    return (
      <List />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sample1', () => sample1);
