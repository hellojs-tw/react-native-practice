import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import _ from 'lodash';

export default class WebsocketSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      chatListMsg: [],
    };
    this.ws = new WebSocket("ws://chatroom.fuyaode.me/");

  }

  componentDidMount() {
    this.ws.onopen = () => {
      // 點開連接
      this.ws.send('someone');
    };

    this.ws.onmessage = e => {
      // 接收到消息
      console.log("onmessage", e.data);
      const data = JSON.parse(e.data).data
      console.log(data);
      if (_.isArray(data)) {
        this.setState({
          chatListMsg: data.reverse()
        })
      } else {
        if (_.isObject(data)) {
          this.setState({
            chatListMsg: [data, ...this.state.chatListMsg]
          })
        }
      }
    };

    this.ws.onerror = e => {
      // 發生錯誤
      console.log("onerror", e.message);
    };

    this.ws.onclose = e => {
      // 連接被關閉了
      console.log("onclose", e.code, e.reason);
    };

  }

  onChangeText = text => {
    this.setState({ message: text });
  };

  send = () => {
    this.ws.send(this.state.message);
    this.setState({
      message: '',
    });
  }

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          padding: 10,
          justifyContent: "center"
        }}
      >
        <Text style={{ color: item.color }}>{item.text}</Text>
      </View>
    )
  }

  _keyExtractor = (item, index) => index;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 6 }}>
          <FlatList
            data={this.state.chatListMsg}
            renderItem={this.renderItem}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: "#bbb" }} />
            )}
          />
        </View>
        <View style={{ flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center', padding: 20 }} >
          <TextInput
            style={{ flex: 1, paddingRight: 20 }}
            placeholder="訊息"
            onChangeText={this.onChangeText}
            value={this.state.message}
          />
          <TouchableOpacity style={styles.button} onPress={this.send}>
            <Text style={styles.buttonText}>發送</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  }
});
