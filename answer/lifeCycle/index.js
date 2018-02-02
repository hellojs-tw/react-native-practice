import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";

export default class LifeCycle extends Component {
  state = {
    isLoading: false
  };

  componentDidMount() {
    // set isLoading true
    this.setState({ isLoading: true });
    // simulate fetch
    setTimeout(() => {
      // receive response
      // set isLoading false
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <ActivityIndicator animating={this.state.isLoading} size="large" color={'#77AA11'} />
      </View>
    );
  }
}
