import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
export default class Counter extends Component {
  state = {
    count: 0
  }

  handleIncrement = () => {
    /* increment count */
    this.setState( prevState => ({
      count: prevState.count + 1
    }));
    Actions.home();
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