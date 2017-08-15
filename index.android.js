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
import ViewSample from './sample/view';
import TextSample from './sample/text';
import ImageSample from './sample/image';
import ButtonSample from './sample/button';
import FlexSample from './sample/flex';
import ScrollView from './sample/scrollView';
import FlatList from './sample/flatList';
import FetchSample from './sample/fetch';
import RefreshSample from './sample/refresh';
import ListItem from './ListItem';
import List from './List';

export default class sample1 extends Component {
  render() {
    return (
      <ViewSample />
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
