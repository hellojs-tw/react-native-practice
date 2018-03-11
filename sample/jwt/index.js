import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  TextInput
} from "react-native";

const DOMAIN = "http://localhost:3001";
const ID_TOKEN = "id_token";
const ACCESS_TOKEN = "access_token";

export default class AwesomeProject extends Component {
  state = {
    username: "123",
    password: "123"
  };

  _onValueChange = async (item, selectedValue) => {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log("AsyncStorage error: " + error.message);
    }
  };

  _getProtectedQuote = async () => {
    const DEMO_TOKEN = await AsyncStorage.getItem(ACCESS_TOKEN);
    fetch(DOMAIN + "/api/protected/random-quote", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN
      }
    })
      .then(response => response.text())
      .then(quote => {
        Alert.alert("Chuck Norris Quote:", quote);
      })
      .done();
  };

  _userLogout = async () => {
    try {
      await AsyncStorage.removeItem(ACCESS_TOKEN);
      await AsyncStorage.removeItem(ID_TOKEN);
      Alert.alert("Logout Success!");
    } catch (error) {
      console.log("AsyncStorage error: " + error.message);
    }
  };

  _userSignup = () => {
    if (this.state.username !== "" && this.state.password !== "") {
      // if validation fails, value will be null
      fetch(DOMAIN + "/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(responseData => {
          this._onValueChange(ACCESS_TOKEN, responseData.access_token);
          this._onValueChange(ID_TOKEN, responseData.id_token),
            Alert.alert(
              "Signup Success!",
              "Click the button to get a Chuck Norris quote!"
            );
        })
        .done();
    }
  };

  _userLogin = () => {
    if (this.state.username !== "" && this.state.password !== "") {
      // if validation fails, value will be null
      fetch(DOMAIN + "/sessions/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(responseData => {
          Alert.alert(
            "Login Success!",
            "Click the button to get a Chuck Norris quote!"
          ),
            this._onValueChange(ID_TOKEN, responseData.id_token);
            this._onValueChange(ACCESS_TOKEN, responseData.access_token);
        })
        .done();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>
            Signup/Login below for Chuck Norris Quotes!
          </Text>
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="username"
            onChangeText={text => {
              this.setState({ username: text });
            }}
            style={styles.textInput}
          />
          <TextInput
            placeholder="password"
            onChangeText={text => {
              this.setState({ password: text });
            }}
            style={styles.textInput}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._userSignup}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this._userLogin}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this._userLogout}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={this._getProtectedQuote}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get a Chuck Norris Quote!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  textInput: {
    lineHeight: 20,
    fontSize: 20,
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#EEE',
  }
});
