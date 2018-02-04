import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import _ from 'lodash';

export default class FetchSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  async componentWillMount() {
    const name = await this.getStorage();
    this.setState({ name });
  }
  
  async componentDidMount() {
    setTimeout(async() => {
      await this.getData();
    }, 1000);
    // await AsyncStorage.clear()
  }

  getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("name");
      console.log("getStorage", value);
      if (value !== null) {
        // We have data!!
        console.log(value);
        return value
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  setStorage = async (name) => {
    try {
      await AsyncStorage.setItem("name", name);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  getData = async page => {
    try {
      let response = await fetch(`http://rn.fuyaode.me/users/${_.random(1, 10)}`);
      let responseJson = await response.json();
      console.log(responseJson);
      this.setState({
        name: responseJson.name
      });
      await this.setStorage(responseJson.name);
      return responseJson;
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Fetch</Text>
        <Text>Title: {this.state.name}</Text>
      </View>
    );
  }
}
