import _ from 'lodash';
import React, { Component } from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import ListItem from '../listItem';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "id": 1,
          "email": "cbilbie0@cyberchimps.com",
          "gender": "Male",
          "avatar": "https://robohash.org/eaetin.png?size=150x150&set=set1",
          "name": "Cointon Bilbie",
          "job_title": "Senior Cost Accountant",
          "company": "King LLC"
        },
        {
          "id": 2,
          "email": "hallcoat1@rakuten.co.jp",
          "gender": "Male",
          "avatar": "https://robohash.org/doloresquiaquae.png?size=150x150&set=set1",
          "name": "Hewet Allcoat",
          "job_title": "Food Chemist",
          "company": "Fisher Group"
        },
        {
          "id": 3,
          "email": "gdackombe2@samsung.com",
          "gender": "Male",
          "avatar": "https://robohash.org/reruminciduntperspiciatis.png?size=150x150&set=set1",
          "name": "Griff Dackombe",
          "job_title": "Account Executive",
          "company": "Boyle, Schmitt and Brakus"
        },
        {
          "id": 4,
          "email": "dsommerled3@ning.com",
          "gender": "Female",
          "avatar": "https://robohash.org/aliquamquiaipsa.png?size=150x150&set=set1",
          "name": "Dolf Sommerled",
          "job_title": "Programmer Analyst III",
          "company": "Stanton, Braun and Crooks"
        },
        {
          "id": 5,
          "email": "ovondrys4@goo.gl",
          "gender": "Male",
          "avatar": "https://robohash.org/mollitiaiurequo.png?size=150x150&set=set1",
          "name": "Ozzie Vondrys",
          "job_title": "Budget/Accounting Analyst II",
          "company": "Goodwin-Predovic"
        },
        {
          "id": 6,
          "email": "bemanson5@icio.us",
          "gender": "Female",
          "avatar": "https://robohash.org/nemobeataemaxime.png?size=150x150&set=set1",
          "name": "Brandi Emanson",
          "job_title": "Quality Control Specialist",
          "company": "Considine-Goldner"
        },
        {
          "id": 7,
          "email": "kchason6@biglobe.ne.jp",
          "gender": "Female",
          "avatar": "https://robohash.org/debitissintconsectetur.png?size=150x150&set=set1",
          "name": "Kori Chason",
          "job_title": "Occupational Therapist",
          "company": "Cartwright Group"
        },
        {
          "id": 8,
          "email": "ndanhel7@mapquest.com",
          "gender": "Male",
          "avatar": "https://robohash.org/optioutfugit.png?size=150x150&set=set1",
          "name": "Norine Danhel",
          "job_title": "Research Associate",
          "company": "Dietrich, Ondricka and Bernier"
        },
        {
          "id": 9,
          "email": "fpollastrino8@ucoz.ru",
          "gender": "Male",
          "avatar": "https://robohash.org/minusveritatistemporibus.png?size=150x150&set=set1",
          "name": "Franky Pollastrino",
          "job_title": "Information Systems Manager",
          "company": "Keeling-Upton"
        },
        {
          "id": 10,
          "email": "bwathey9@barnesandnoble.com",
          "gender": "Male",
          "avatar": "https://robohash.org/eaquenobisenim.png?size=150x150&set=set1",
          "name": "Bowie Wathey",
          "job_title": "Information Systems Manager",
          "company": "Bogan and Sons"
        },
        {
          "id": 11,
          "email": "boheaneya@shutterfly.com",
          "gender": "Female",
          "avatar": "https://robohash.org/autemeosquia.png?size=150x150&set=set1",
          "name": "Benito O'Heaney",
          "job_title": "Chemical Engineer",
          "company": "Borer Group"
        },
        {
          "id": 12,
          "email": "cturrillb@earthlink.net",
          "gender": "Male",
          "avatar": "https://robohash.org/rerumsuscipitnulla.png?size=150x150&set=set1",
          "name": "Cherry Turrill",
          "job_title": "Marketing Manager",
          "company": "Johnson Inc"
        },
        {
          "id": 13,
          "email": "rvedstrac@hibu.com",
          "gender": "Female",
          "avatar": "https://robohash.org/seddelectusreprehenderit.png?size=150x150&set=set1",
          "name": "Randi Vedstra",
          "job_title": "VP Accounting",
          "company": "Braun, VonRueden and Goodwin"
        },
        {
          "id": 14,
          "email": "ajahneld@harvard.edu",
          "gender": "Female",
          "avatar": "https://robohash.org/nequequaeipsa.png?size=150x150&set=set1",
          "name": "Astrid Jahnel",
          "job_title": "Marketing Assistant",
          "company": "Wintheiser-Boyer"
        },
        {
          "id": 15,
          "email": "sslaytone@hao123.com",
          "gender": "Female",
          "avatar": "https://robohash.org/inciduntofficiaet.png?size=150x150&set=set1",
          "name": "Shoshanna Slayton",
          "job_title": "Mechanical Systems Engineer",
          "company": "Russel-Schuppe"
        },
        {
          "id": 16,
          "email": "lhowittf@youtube.com",
          "gender": "Male",
          "avatar": "https://robohash.org/facerererumaspernatur.png?size=150x150&set=set1",
          "name": "Levi Howitt",
          "job_title": "VP Accounting",
          "company": "Kohler-Heathcote"
        },
        {
          "id": 17,
          "email": "wgeaneg@yelp.com",
          "gender": "Female",
          "avatar": "https://robohash.org/saepeiustofugiat.png?size=150x150&set=set1",
          "name": "Winnah Geane",
          "job_title": "Associate Professor",
          "company": "Schultz, Thiel and Rodriguez"
        },
        {
          "id": 18,
          "email": "icancelierh@123-reg.co.uk",
          "gender": "Female",
          "avatar": "https://robohash.org/minuslaborevoluptatem.png?size=150x150&set=set1",
          "name": "Ives Cancelier",
          "job_title": "Speech Pathologist",
          "company": "Goodwin Group"
        },
        {
          "id": 19,
          "email": "ctebbei@weibo.com",
          "gender": "Female",
          "avatar": "https://robohash.org/etfugiatblanditiis.png?size=150x150&set=set1",
          "name": "Craggie Tebbe",
          "job_title": "Marketing Assistant",
          "company": "Larkin LLC"
        },
        {
          "id": 20,
          "email": "dlej@cpanel.net",
          "gender": "Male",
          "avatar": "https://robohash.org/adipiscirecusandaesuscipit.png?size=150x150&set=set1",
          "name": "Deerdre Le Estut",
          "job_title": "Information Systems Manager",
          "company": "Collins LLC"
        }
      ],
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
      <FlatList
        data={this.format(this.state.data)}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => <ListItem {...item}/>}
        ItemSeparatorComponent={
          ({highlighted}) => <View style={{ height: 1, backgroundColor: '#000'  }} />
        }
      />
    );
  }
}