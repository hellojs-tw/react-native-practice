import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

export default class FlexSample extends Component {
  render() {
    return (
      <View style={{ flex: 1  }}>
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <View style={{  flex: 1, backgroundColor: 'red', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
            <Text style={{ color: 'white'  }}>右上</Text>
          </View>
          <View style={{  flex: 3, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white'  }}>置中</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' , backgroundColor: 'blue' }}>
          <View style={{  flex: 1, backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
            <Text style={{ color: 'white'  }}>右上？</Text>
          </View>
          <View style={{  flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </View>
        </View>
      </View>
    );
  }
}
