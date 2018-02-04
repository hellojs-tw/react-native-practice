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
      <TouchableOpacity style={styles.content} onPress={this.props.onPress}>
        <View style={{ 
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center' }}
        >
          <Image
            style={styles.image}
            source={{ uri: this.props.image }}
          />
       </View>
       <View style={styles.desc}>
          <Text style={{ fontSize: 20, fontWeight: '500'  }}>
            {this.props.title}
          </Text>
          <Text>
            {this.props.desc}
          </Text>
       </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    marginTop: 40,
    flexDirection: 'row',
    height: 100,
    padding: 10,
    backgroundColor: '#eee',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#bbb' 
  },
  desc: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: 20,
  }
})