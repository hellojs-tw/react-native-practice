import React, { Component } from "react";
import { Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";
import ControlledInput from '../controlledInput';
import Counter from '../counter';
import ViewSample from '../../sample/view';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="counter" component={Counter} title="Counter" />
          <Scene key="home" component={ViewSample} title="ViewSample" />
        </Stack>
      </Router>
    );
  }
}
