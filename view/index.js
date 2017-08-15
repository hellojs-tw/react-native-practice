import React, { Component } from 'react';
import {
  View,
} from 'react-native';

export default class ViewSample extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
       <View style={{backgroundColor: 'red', flex: 1 }}/>
       <View style={{backgroundColor: 'blue', flex: 1}} />
      </View>
    );
  }
}