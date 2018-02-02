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
import ScrollView from "./sample/scrollView";
import FlatList from "./sample/flatList";
import FetchSample from "./sample/fetch";
import RefreshSample from "./sample/refresh";
import ListItem from "./sample/list/ListItem";
import List from "./sample/list";
import UserList from "./sample/userList";
import ControlledInput from './sample/controlledInput';
import Routes from './sample/routes';

import AnswerUserList from "./answer/userList";
import AnswerListItem from "./answer/list/ListItem";
import AnswerList from "./answer/list";


export default class sample1 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AnswerList />
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
