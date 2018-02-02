import _ from 'lodash';
import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
} from 'react-native';
import ListItem from '../../answer/listItem';

const DEFAULT_PAGE = 1;
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: true,
      data: [],
      page: DEFAULT_PAGE
    };
  }

  // componentDidMount 載入後抓第一筆資料
  async componentDidMount() {
    await this.getData(DEFAULT_PAGE)
  }

  // 整理資料讓 ListItem 能使用
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
      if (page === DEFAULT_PAGE) {
        // 第一筆資料，記得關掉 loading
        // this.setState({ ... })
      } else {
        // 滾動加載更新資料
        // this.setState({ ... })
      }
    } catch (e) {
      console.error(e);
    }
  }


  _onEndReached = _.debounce(() => {
    // 滑動到底部加載資料
  },1000);

  render() {
    return (
      <FlatList
        data={
          [{ title: 'title' }, { title: 'title2' }, { title: 'title3' }]
        }
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => {
          // return 剛剛實作的 ListItem
          return <Text>{item.title}</Text>
        }}
        onEndReached={this._onEndReached}
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