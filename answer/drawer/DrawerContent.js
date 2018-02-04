import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, ViewPropTypes, Button } from "react-native";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "red"
  }
});

class DrawerContent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string
  };

  static contextTypes = {
    drawer: PropTypes.object
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Home" onPress={Actions.home} />
        <Button title="ControlledInput" onPress={Actions.input} />
      </View>
    );
  }
}

export default DrawerContent;
