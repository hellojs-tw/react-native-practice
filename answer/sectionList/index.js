import _ from 'lodash';
import React, { Component } from 'react';
import {
  FlatList,
  SectionList,
  View,
} from 'react-native';
import ListItem from '../listItem';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: [{
        data: [{
          "id": 1,
          "email": "cbilbie0@cyberchimps.com",
          "gender": "Male",
          "avatar": "https://robohash.org/eaetin.png?size=150x150&set=set1",
          "name": "Cointon Bilbie",
          "job_title": "Senior Cost Accountant",
          "company": "King LLC"
        }],
        title: 'AAAAA'
      }, {
        data: [{
          "id": 1,
          "email": "cbilbie0@cyberchimps.com",
          "gender": "Male",
          "avatar": "https://robohash.org/eaetin.png?size=150x150&set=set1",
          "name": "Cointon Bilbie",
          "job_title": "Senior Cost Accountant",
          "company": "King LLC"
        }],
        title: 'BBBB'
      }],
    };
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


  _keyExtractor = (item, index) => index;
  
  render() {
    return (
      null
    );
  }
}