import React, { Component } from "react";
import { Text, View } from "react-native";
import Greeting from "./Greeting";

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Greeting name="React" />
        <Greeting name="Native" />
        <Greeting name="JavaScript" />
        <Greeting name={25} />
      </View>
    );
  }
}
