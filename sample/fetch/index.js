import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class FetchSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  
  async componentDidMount() {
    setTimeout(async() => {
      await this.getData()
    }, 1000)
  }
  
  getData = async(page) => {
    try {
      // 這裡要記得改成自己電腦的 IP
      const IP ='192.168.2.101';
      let response = await fetch(`http://${IP}:1337/users/1`);
      let responseJson = await response.json();
      console.log(responseJson);
      this.setState({
        name: responseJson.name
      })
      return responseJson;
    } catch (e) {
      console.error(e);
    }
  }
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
        <Text>Fetch</Text>
        <Text>Title: {this.state.name}</Text>
      </View>
    );
  }
}