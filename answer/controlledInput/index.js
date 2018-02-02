import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

export default class ControlledInput extends Component {
  state = {
    text = 'state 預設值'
  };

  onChangeText = text => {
    this.setState({ text });
  };

  render() {
    return (
      <View>
        <TextInput defaultValue="input 預設值" onChangeText={this.onChangeText} />
        <Text> state.text: {this.state.text} </Text>
      </View>
    );
  }
}
