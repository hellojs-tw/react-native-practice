import React, { Component } from "react";
import { Text, View } from "react-native";
import { Drawer, Router, Stack, Scene } from "react-native-router-flux";
import ControlledInput from "../controlledInput";
import FlatList from "../flatList";
import DrawerContent from './DrawerContent';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Drawer
            contentComponent={DrawerContent}
            drawerWidth={300}
            hideNavBar
            title="Drawer"
            key="drawer"
          >
              <Scene key="home" component={FlatList} title="FlatList" drawer={true} />
              <Scene
                key="input"
                component={ControlledInput}
                title="ControlledInput"
              />
          </Drawer>
        </Stack>
      </Router>
    );
  }
}
