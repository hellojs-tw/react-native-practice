import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
} from 'react-native';
import ListItem from './ListItem';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 預設載入
      isRefreshing: true,
      data: [],
      page: 0
    };
  }

  // componentDidMount 載入後抓第一筆資料
  async componentDidMount() {
    await this.getData(0)
  }

  // 整理資料
  format = (array) => {
    return array.map((data) => {
      return {
        // 整理資料格式符合 ListItem props
      }
    })
  }

  getData = async (page) => {
    try {
      // 可以使用的 API
      // http://rn.fuyaode.me/pokemons/1
      // http://rn.fuyaode.me/users/1
      let response = await fetch(`http://rn.fuyaode.me/users?_page=${page}&_limit=10`);
      let responseJson = await response.json();
      console.log('responseJson', responseJson);
      const data = this.format(responseJson);
      if (page === 0) {
        // 第一筆資料，記得關掉 loading
      } else {
        // 滾動加載更新資料
      }
      return responseJson;
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <FlatList
        data={
          // 資料
          [{ title: 'title' }, { title: 'title2' }, { title: 'title3' }]
        }
        renderItem={({ item }) => {
          // return 剛剛實作的 ListItem
          return <Text>{item.title}</Text>
        }}
        onEndReached={() => {
          // 滑到底部的時候加載新資料
        }}
        refreshing={this.state.isRefreshing}
        onRefresh={() => {
          // 下拉刷新
        }}
        ItemSeparatorComponent={({ highlighted }) => {
          // return 簡單的分隔線
          return null;
        }}
      />
    );
  }
}