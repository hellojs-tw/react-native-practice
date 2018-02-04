/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import ViewSample from "./sample/view";
import TextSample from "./sample/text";
import ImageSample from "./sample/image";
import ButtonSample from "./sample/button";
import FlexSample from "./sample/flex";
import ListItem from "./sample/listItem";
import ScrollView from "./sample/scrollView";
import FlatList from "./sample/flatList";
import List from "./sample/list";
import RefreshSample from "./sample/refresh";
import UserList from "./sample/userList";
import ControlledInput from "./sample/controlledInput";
import Routes from "./sample/routes";
import LifeCycle from "./sample/lifeCycle";
import Counter from "./sample/counter";
import LotsOfGreetings from "./sample/LotsOfGreetings";
import FetchSample from "./sample/fetch";
import FetchList from "./sample/fetchList";
import Drawer from "./sample/drawer";
import Tabs from "./sample/Tabs";

import AnswerListItem from "./answer/listItem";
import AnswerList from "./answer/list";
import AnswerFetchList from "./answer/fetchList";
import AnswerUserList from "./answer/userList";
import AnsCounter from "./answer/counter";
import AnsLifeCycle from "./answer/lifeCycle";
import AnsLotsOfGreeting from "./answer/LotsOfGreetings";
import AnsControlledInput from "./answer/controlledInput";

export default class sample1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <LifeCycle />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("sample1", () => sample1);
