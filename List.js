import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import ListItem from './ListItem';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 0
    };
  }
  
  async componentDidMount() {
    await this.getData(0)
  }
  
  getData = async(page) => {
    try {
      // 這裡要記得改成自己電腦的 IP
      let response = await fetch(`http://192.168.2.100:1337/users?_page=${page}&_limit=10`);
      let responseJson = await response.json();
      console.log(responseJson);
      if (page === 0) {
        this.setState({
          data: responseJson,
        })
      } else {
        this.setState({
          data: [...this.state.data, ...responseJson],
        })
      }
      return responseJson;
    } catch (e) {
      console.error(e);
    }
  }
  
  render() {
    return (
      <FlatList
        data={[
          {title: 'title1', key: 1},
          {title: '標題2', key: 2},
          {title: '標題3', key: 3},
          {title: '標題4', key: 4},
          {title: '標題5', key: 5},
          {title: '標題6', key: 6},
          {title: '標題7', key: 7},
        ]}
        renderItem={({item}) => <ListItem key={item.key} title={item.title}/>}
        onEndReached={() => {
          this.setState({
            page: this.state.page + 1
          }, () => {
            this.getData(this.state.page)
          })
        }}
        refreshing={false}
        onRefresh={() => {}}
      />
    );
  }
}