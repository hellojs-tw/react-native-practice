import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Drawer, Router, Stack, Scene, Tabs } from "react-native-router-flux";
import ControlledInput from "../controlledInput";
import FlatList from "../flatList";
import TabIcon from './TabIcon';

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#eee"
  }
});

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Tabs
            tabBarStyle={styles.tabBarStyle}
            title="Drawer"
            key="drawer"
            activeBackgroundColor="white"
            inactiveBackgroundColor="#BBB"
          >
            <Scene
              title="Tab 1"
              key="home"
              component={FlatList}
              title="FlatList"
              drawer={true}
              icon={TabIcon}
            />
            <Scene
              title="Tab 2"
              key="input"
              component={ControlledInput}
              title="ControlledInput"
              icon={TabIcon}
            />
          </Tabs>
        </Stack>
      </Router>
    );
  }
}
