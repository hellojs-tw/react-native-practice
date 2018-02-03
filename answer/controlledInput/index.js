import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

export default class ControlledInput extends Component {
  state = {
    text: "Hi 我是 state 預設值"
  };

  onChangeText = text => {
    this.setState({ text });
  };

  render() {
    return (
      <View>
        <TextInput
          defaultValue="我是 input 預設值"
          onChangeText={this.onChangeText}
        />
        <Text style={{color: '#1166AA'}}>Text: {this.state.text} </Text>
      </View>
    );
  }
}
