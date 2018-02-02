import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import List from "../../List";

export default class UserList extends Component {
  state = {
    query: ""
  };

  render() {
    console.log("index", this.state.query);
    return (
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="請輸入姓名"
          onChangeText={this.onChangeText}
          value={this.state.query}
        />
        <List />
      </View>
    );
  }
}
