import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

export default class ImageSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{ height: 34, width: 91, marginBottom: 20 }} 
          source={{ uri: 'https://hellojs.school/imgs/hellojs-logo.png' }}
        />
        <Image
          style={{ marginBottom: 20 }}
          source={require('./assets/man.png')}
        />
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
})