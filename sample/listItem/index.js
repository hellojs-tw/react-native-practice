import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class ListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    onPress: PropTypes.func,
  }
  static defaultProps = {
    title: '標題',
    desc: '內容',
    image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    onPress: () => {},
   }
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Image
          style={{ height: 80, width: 80 }}
          source={{ uri: this.props.image }}
        />
        <Text>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 10,
    backgroundColor: '#eee',
  },
})