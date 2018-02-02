import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

export default class ControlledInput extends Component {
  state = {
    text: "defaultValue"
  };

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <TextInput placeholder="請輸入..." />
        <Text>{this.state.text} </Text>
      </View>
    );
  }
}
