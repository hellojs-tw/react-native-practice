import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import List from './List';

export default class UserList extends Component {

  state = {
    query: ''
  }

  onChangeText = text => {
    this.setState({ query: text });
  };

  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <TextInput placeholder="請輸入姓名" onChangeText={this.onChangeText} />
        <List query={this.state.query} />
      </View>
    )
  }
}