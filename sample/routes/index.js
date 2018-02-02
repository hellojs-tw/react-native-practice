import React, { Component } from "react";
import { Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";
import ControlledInput from '../controlledInput';
import FlatList from '../flatList';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="flatList" component={FlatList} title="FlatList" />
          <Scene key="controlledInput" component={ControlledInput} title="ControlledInput" />
        </Stack>
      </Router>
    );
  }
}
