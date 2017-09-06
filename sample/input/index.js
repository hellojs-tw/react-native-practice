import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

export default class InputSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
        <Text>我的名字是: {this.state.name}</Text>
        <TextInput 
          value={this.state.name}
          onChangeText={(value) => {
            this.setState({
              name: value
            })
          }}
          style={{ width: 200, height: 44, padding: 8, borderWidth: 1 }}
        />
      </View>
    );
  }
}