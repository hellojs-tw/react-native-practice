import _ from 'lodash';
import React, { Component } from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import ListItem from './ListItem';

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
  componentWillUpdate(nextProps, nextState) {
    console.log('diff', nextProps);
    if(nextProps.query !== this.props.query) {
      this.getData(DEFAULT_PAGE);
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps !== this.props) {
  //     console.log('diff');
  //     this.getData(0);
  //   }
  // }

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
    console.log('query', this.props.query);
    try {
      // 可以使用的 API
      // http://rn.fuyaode.me/pokemons/1
      // http://rn.fuyaode.me/users/1
      let response = await fetch(`http://rn.fuyaode.me/users?_page=${page}&_limit=10&name_like=${this.props.query}`);
      let responseJson = await response.json();
      const data = this.format(responseJson);
      if (page === DEFAULT_PAGE) {
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

  _onEndReached = _.debounce(() => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.getData(this.state.page)
    })
  },1000);

  _keyExtractor = (item, index) => index;
  
  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => <ListItem {...item}/>}
        onEndReached={this._onEndReached}
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