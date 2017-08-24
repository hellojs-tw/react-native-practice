import React, { Component } from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import ListItem from './ListItem';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: true,
      data: [],
      page: 0
    };
  }
  
  // componentDidMount 載入後抓第一筆資料
  async componentDidMount() {
    await this.getData(0)
  }
  
  // 整理資料讓 ListItem 能使用
  format = (array) => {
    return array.map((data) => {
      return {
        title: data.name,
        desc: data.job_title,
        image: data.avatar,
      }
    })
  }
  
  getData = async(page) => {
    try {
      // 這裡要記得改成自己電腦的 IP
      const IP ='192.168.57.1';
      // 可以使用的 API
      // http://${IP}:1337/pokemons/1
      // http://${IP}:1337/users/1
      let response = await fetch(`http://${IP}:1337/users?_page=${page}&_limit=10`);
      let responseJson = await response.json();
      const data = this.format(responseJson);
      if (page === 0) {
        this.setState({
          isRefreshing: false,
          data,
        });
      } else {
        this.setState({
          data: [...this.state.data, ...data],
        });
      }
      return responseJson;
    } catch (e) {
      console.error(e);
    }
  }
  
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({item}) => <ListItem {...item}/>}
        onEndReached={() => {
          this.setState({
            page: this.state.page + 1
          }, () => {
            this.getData(this.state.page)
          })
        }}
        refreshing={this.state.isRefreshing}
        onRefresh={() => {
          this.setState({
            isRefreshing: true
          });
          this.getData(0);
        }}
        ItemSeparatorComponent={
          ({highlighted}) => <View style={{ height: 1, backgroundColor: '#000'  }} />
        }
      />
    );
  }
}