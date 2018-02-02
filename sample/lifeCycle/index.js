import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";

export default class LifeCycle extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    // set isLoading true

    // simulate fetch
    setTimeout(() => {
      // receive response
      // set isLoading false

    }, 2000);
  }

  render() {
    return (
      <View>
        <ActivityIndicator animating={this.state.isLoading} size="large" color={'#77AA11'} />
      </View>
    );
  }
}
