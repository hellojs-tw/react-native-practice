import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import ListItem from '../../ListItem';

export default class ScrollViewSample extends Component {
  render() {
    return (
      <ScrollView>
        <ListItem key={1} />
        <ListItem key={2} />
        <ListItem key={3} />
        <ListItem key={4} />
        <ListItem key={5} />
        <ListItem key={6} />
        <ListItem key={7} />
      </ScrollView>
    );
  }
}