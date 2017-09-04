import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Alert
} from 'react-native';


const DATA = [
  { key: 'AAAAAA' },
  { key: 'BBBBBB' },
  { key: 'CCCCCC' },
  { key: 'DDDDDD' },
  { key: 'EEEEEE' },
  { key: 'FFFFFF' },
  { key: 'GGGGGG' },
];
export default class FlatListSample extends Component {
  state = {
    count: 1,
    list: DATA
  }

  onEndReached = () => {
    Alert.alert('阿', '到底摟');
    this.setState((prevState, props) => ({
      list: [
        ...prevState.list,
        ...DATA.map((item) => ({ key: prevState.count + item.key }))
      ],
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <FlatList
        data={this.state.list}
        renderItem={({ item }) => <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}><Text>{item.key}</Text></View>}
        onEndReachedThreshold={0.1}
        onEndReached={this.onEndReached}
        ListHeaderComponent={
          <View style={[styles.container, { backgroundColor: 'blue' }]}>
            <Text style={{ color: '#fff' }}>Header</Text>
          </View>
        }
        ListFooterComponent={
          <View style={[styles.container, { backgroundColor: 'green' }]}>
            <Text style={{ color: '#fff' }}>Footer</Text>
          </View>
        }
        ListEmptyComponent={
          <View style={[styles.container, { backgroundColor: 'red' }]}>
            <Text style={{ color: '#fff' }}>Empty</Text>
          </View>
        }
        ItemSeparatorComponent={
          ({ highlighted }) => <View style={{ height: 3, backgroundColor: 'pink' }} />
        }
      />
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