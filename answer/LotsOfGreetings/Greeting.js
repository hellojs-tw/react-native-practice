import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from 'prop-types';

export default class Greeting extends Component {

  static defaultProps = {
    name: 'Guest',
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}