import React, { Component } from 'react';
import {
  ScrollView,
  RefreshControl,
} from 'react-native';
import ListItem from '../../ListItem';

export default class RefreshSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false
    };
  }
  
  onRefresh = () => {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        isRefreshing: false
      })
    }, 1000);
  }
  
  render() {
    return (
      <ScrollView
       refreshControl={
         <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh}
         />
       }
      >
        <ListItem key={1} />
        <ListItem key={2} />
        <ListItem key={3} />
        <ListItem key={4} />
        <ListItem key={5} />
        <ListItem key={6} />
        <ListItem key={7} />
      </ScrollView>
    );
  }
}