import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

export default class ListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    onPress: PropTypes.func,
  }
  // Prop 預設值，若對應的 props 沒傳入值將會使用 default 值
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
      // TouchableOpacity: 點擊後變透明的按鈕
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View>
          <Image
            style={{ height: 80, width: 80, borderRadius: 50, borderWidth: 2.5, borderColor: 'lightgray'}}
            source={{ uri: this.props.image }}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          <Text style={styles.desc}>
            {this.props.desc}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    padding: 10,
    backgroundColor: '#eee',
  },
  titleContainer: {
    flexDirection: 'column',
    padding: 15,
    paddingLeft: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray'
  },
  desc: {
    
  }
})