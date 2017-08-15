import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Alert
} from 'react-native';

export default class FlatListSample extends Component {
  render() {
    return (
      <FlatList
        data={[
          {key: 'AAAAAA'},
          {key: 'BBBBBB'},
          {key: 'CCCCCC'},
          {key: 'DDDDDD'},
          {key: 'EEEEEE'},
          {key: 'FFFFFF'},
          {key: 'GGGGGG'},
          {key: 'HHHHHH'},
          {key: 'IIIIII'},
          {key: 'JJJJJJ'},
          {key: 'KKKKKK'},
          {key: 'LLLLLL'},
        ]}
        renderItem={({item}) => <View style={{ height: 150  }}><Text>{item.key}</Text></View>}
        onEndReached={() => { Alert.alert('阿', '到底摟') }}
        ListHeaderComponent={
          <View style={[styles.container, { backgroundColor: 'blue' }]}>
            <Text style={{ color: '#fff'  }}>Header</Text>
          </View>
        }
        ListFooterComponent={
          <View style={[styles.container, { backgroundColor: 'green' }]}>
            <Text style={{ color: '#fff'  }}>Footer</Text>
          </View>
        }
        ListEmptyComponent={
          <View style={[styles.container, { backgroundColor: 'red' }]}>
            <Text style={{ color: '#fff'  }}>Empty</Text>
          </View>
        }
        ItemSeparatorComponent={
          ({highlighted}) => <View style={{ height: 3, backgroundColor: 'pink'  }} />
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