import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class Counter extends Component {
  state = {
    count: 0
  }

  handleIncrement = () => {
    /* increment count */
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{this.state.count}</Text>
        <Button title="Add" onPress={this.handleIncrement} />
      </View>
    );
  }
}