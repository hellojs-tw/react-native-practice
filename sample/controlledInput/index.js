import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

export default class ControlledInput extends Component {
  static state = {
    text: 'state 預設值'
  };

  render() {
    return (
      <View>
        <TextInput />
        <Text> state.text: {this.state.text} </Text>
      </View>
    );
  }
}
