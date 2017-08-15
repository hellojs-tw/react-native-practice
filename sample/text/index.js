import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

export default class TextSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>HelloJS</Text>
        <Text style={styles.baseText}>
          <Text style={styles.title}>HelloJS</Text>
          <Text style={styles.desc}> Good</Text>
        </Text>
        <Text 
          style={{ fontSize: 40 }}
          numberOfLines={1}
          onPress={() => {
            Alert.alert("阿!!", "你點到我了");
          }}
        >
          測試測試測試測試測試測試測試
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30,
  },
  text1: {
    fontSize: 30,
  },
  baseText: {
    fontSize: 18,
    color: 'blue'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  desc: {
    color: 'red',
  }
})