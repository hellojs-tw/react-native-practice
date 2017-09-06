import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button,
  Alert,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text
} from 'react-native';

export default class ButtonSample extends Component {
  
  onPress = () => {
    Alert.alert("啊!", "你按到我了！");
  }

  render() {

    const buttonProps = {
      onPress: this.onPress,
      // onPress: () => {},
      style: styles.button,
      // activeOpacity: 0
      hitSlop: {
        top: 0,
        left: 100,
        bottom: 0,
        right: 100
      }
    };


    return (
      <View style={styles.container}>
      
        <Button
          style={{ marginBottom: 20 }}
          onPress={this.onPress}
          title="HelloJS"
          color="#841584"
        />
        
        <TouchableOpacity {...buttonProps}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>
        
        <TouchableHighlight {...buttonProps}>
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </TouchableHighlight>
        
        {/*<TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={[styles.button, { backgroundColor: 'red', width: 150  }]}>
            <Text style={styles.buttonText}>Button</Text>
          </View>
        </TouchableNativeFeedback>
        
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>*/}
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
  button: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
})