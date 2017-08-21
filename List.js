import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  Alert,
} from 'react-native';
import ListItem from './ListItem';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //預設 loading
      isRefreshing: true,
      data: [],
      page: 1,
      rows: [],
    };
  }
  
  getRow = () => {
    let rows = [];
    
    for(let i = 1; i <= 10; i++){
      rows.push({ title: `標題${i}`, key: i });
    }
    return rows
  }
  
  // componentDidMount()不是在render後才執行嗎，為什麼不把this.setState()放在componentWillMount呢?
  // 第一次 render 後抓第一筆資料
  async componentDidMount() {
    this.setState({
      data: await this.getData(this.state.page)
    })
  }
  
  // 整理資料
  format = (array) => {
    return array.map((data) => {
      return {
        // 整理資料格式符合 ListItem props
        key: data.id,
        name: data.name,
        job: data.job_title,
        avatar: data.avatar
      }
    })
  }
  
  getData = async(page) => {
    try {
      // 這裡要記得改成自己電腦的 IP
      const IP ='192.168.88.1';
      console.log(IP)
      // 可以使用的 API
      // http://${IP}:1337/pokemons/1
      // http://192.168.88.1:1337/users/1
      let response = await fetch(`http://${IP}:1337/users?_page=${page}&_limit=10`);
      let responseJson = await response.json();
      // console.log('responseJson', responseJson);
      let data = this.format(responseJson);
      console.log('data in getData', data);
      if (page === 1) {
        // 第一筆資料，記得關掉 loading
        this.setState({
          isRefreshing: false
        })
      } else {
        // 滾動載入資料
      }
      // return responseJson; 應該是要return data吧?
      // console.log('data', data);
      return data;
    } catch (e) {
      console.error(e);
    }
  }
  
  componentWillMount() {
    // This approach has a major flaw. If you call setState twice before the render cycle, 
    // the second call will clobber the first call. 
    
    // for(let i = 1; i <= 3; i++){
    //   let nextItem = this.state.rows.slice();
    //   nextItem.push({ title: `標題${i}`, key: i });
    //   this.setState({
    //     rows: nextItem
    //   });
    //   console.log(`第${i}次`, nextItem, this.state.rows);
    // }
    
    // this.setState({
    //   rows: this.getRow()
    // });
  }
  
  
  
  // 保持 render() 的純粹，不要在裡面進行 state 修改或是使用非同步方法
  render() {
    //console.log('This.state.rows: ', this.state.rows);
    return (
      <FlatList
        
        data={
          // 資料
          // [{ title: 'title'  }, { title: 'title2'  },{ title: 'title3'  }, ]
          //[<ListItem />, <ListItem />, <ListItem />, <ListItem />, <ListItem />]
          this.state.data
        }
        
        renderItem={({item}) => {
          // return 剛剛實作的 ListItem
          // return <Text>{item.title}</Text>
          return <ListItem key={item.key} title={item.name} desc={item.job} image={item.avatar}/>
        }}
        
        //initialNumToRender={10}
        
        // onEndReachedThreshold={0.03}
        // onEndReached={({ distanceFromEnd }) => {
        //   // 滑到底部的時候載入新資料
        //   Alert.alert('distanceFromEnd', distanceFromEnd.toString());
          // const p1 = new Promise((resolve, reject) => {
          //   this.setState({
          //     page: this.state.page + 1,
          //   })
          //   console.log('page', this.state.page);
          // });
          
          // p1.then(() => {
          //   this.setState({
          //     data: this.state.data.concat(this.getData(this.state.page))
          //   });
          //   console.log('data', this.state.data);
          // }, function(reason) {
          //     console.log(reason);
          // })


        // }}
        
        extraData={this.state}
        
        refreshing={this.state.isRefreshing}
        
        // 下拉刷新
        onRefresh= { () => {
          
          let nextData = this.state.data;
          console.log('length before concat', nextData.length);
          
          // 錯誤的方式2
          // wait = async() => {
          //   return new Promise((resolve, reject) => {
          //       get = () => (
          //         nextData.concat(this.getData(2))
          //       )
          //       resolve(get());
          //     }
          //   )
          // }
          // nextData = await wait();
          
          // update = () => {
          //   nextData = await wait();
          // }
          // update();
          const p1 = new Promise((resolve, reject) => {
              this.setState({
                page: this.state.page + 1
              })
              resolve(this.state.page);
            });
          
          p1.then(async(newPage) => {
            try{
              this.setState({
                data: this.state.data.concat(await this.getData(this.state.page)) //關鍵在於必須先取得非同步getData()的資料
              })
              console.log('state.data', this.state.data);
              // nextData = nextData.concat(await this.getData(2))  
              // console.log('nextData', nextData);
            } catch(err) {
              console.log('Error', err); 
            }
          });
          
          // 正確方式
          // fetchNewData = async() => {
          //   try{
          //     this.setState({
          //       data: this.state.data.concat(await this.getData(this.state.page)) //關鍵在於必須先取得非同步getData()的資料
          //     })
          //     console.log('state.data', this.state.data);
          //     // nextData = nextData.concat(await this.getData(2))  
          //     // console.log('nextData', nextData);
          //   } catch(err) {
          //     console.log('Error', err); 
          //   }
          // }
          // fetchNewData();
          
          // 錯誤方式1
          // const p1 = new Promise((resolve, reject) => {
            
          // });
        
          // p1.then((value) => {
          //   console.log('nextData.length', value.length);
          // }, (err) => {
          //   console.log('Error', err);
          // })
          

          // try{
          //   nextData = await nextData.concat(this.getData(this.state.page + 1));
          //   if(nextData.length > 10) {
          //     console.log('nextData', nextData); 
          //   } else{
            
          //   }
          // } catch(err){
          //   console.log('Error', err)
          // }
          
          // p1.then((data) => {
          //   console.log('nextData', data);
          // })
          
          // this.setState({
          //   data: nextData
          // })
          //console.log(this.state.data);
        }}
        
        ItemSeparatorComponent={({highlighted}) => {
          // return 簡單的分隔線
          // return null;
          return <View style={{ height: 1, backgroundColor: 'lightgray'  }} />
        }}
      />
    );
  }
  
}