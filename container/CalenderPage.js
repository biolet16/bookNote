import React from 'react';
import firebase from '@react-native-firebase/app';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, CommonActions } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import auth from '@react-native-firebase/auth';

import moment from 'moment';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

class CalenderPageLode extends React.Component {
    //로그아웃
    logOut(){
        firebase
            .auth()
            .signOut()
            .then(() =>
            //this.props.bookNoteStore.changeUserToken(null);
            navigation.navigate('loginStack'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

  constructor(props) {
      super(props);
      this.props.bookNoteStore.getMonthBookList();
  }

//선택한 날짜 및 스타일 설정 함수
  selectDay(day){
    //저장할 날짜, 스타일 변수
    let dayData={[day.year + "-" + day.dateString.split('-')[1] + "-" + day.dateString.split('-')[2]]:{selected: true, marked: true, selectedColor: "rgb(76,174,249)"}};
    //store 저장 함수 호출
    this.props.bookNoteStore.changeSelectDay(dayData);
    //bookList 페이지 오픈
    this.props.navigation.navigate('BookListPage');
  }

  selectMonth(month){
    console.log(month.month);
    this.props.bookNoteStore.changeSelectMon(String(month.month));
  }

  monthBookAdd(){
    this.props.navigation.navigate('BookSearch');
  }


  render(){
      const {selectedDate, monthBookList} = this.props.bookNoteStore;
      console.log('render',monthBookList);
      return (
           <View style={styles.container}>
             <View>
                <View>
                   <Text style={styles.titleTxt}>이달의 책</Text>
                    {
                           monthBookList!==null &&
                               monthBookList.map(data => {
                                   let color=data.BOOKCOLOR;
                                   return(
                                   <View key={data.NO+'Pview'}>
                                       <View key={data.NO+'view'} style={{width:10, backgroundColor: color}}/>
                                       <Text key={data.NO} style={styles.titleTxt}>{data.BOOKTITLE}</Text>
                                    </View>
                                   )
                               })
                           ||
                           <></>
                      }
                </View>
                <View>
                      <TouchableOpacity activeOpacity={0.8}  style={styles.bookAddBtn} onPress={() => this.monthBookAdd()}>
                             <Text style={styles.addTxt}>+</Text>
                       </TouchableOpacity>
                </View>
             </View>
             <View>
             </View>
               <Calendar
                 onChange={(range) => console.log(range)}
                 onDayPress={(day) => this.selectDay(day)}
                 onMonthChange={(month) => this.selectMonth(month)}
                 startDate={moment().format('YYYY-MM-DD')}
                 monthFormat={'MM월'}
                 markedDates={selectedDate}
                 theme={{
                   activeDayColor: {},
                   monthTitleTextStyle: {
                     color: '#6d95da',
                     fontWeight: '300',
                     fontSize: 16,
                   },
                   emptyMonthContainerStyle: {},
                   emptyMonthTextStyle: {
                     fontWeight: '200',
                   },
                   weekColumnsContainerStyle: {},
                   weekColumnStyle: {
                     paddingVertical: 10,
                   },
                   weekColumnTextStyle: {
                     color: '#b6c1cd',
                     fontSize: 13,
                   },
                   nonTouchableDayContainerStyle: {},
                   nonTouchableDayTextStyle: {},
                   startDateContainerStyle: {},
                   endDateContainerStyle: {},
                   dayContainerStyle: {},
                   dayTextStyle: {
                     color: '#2d4150',
                     fontWeight: '200',
                     fontSize: 15,
                   },
                   dayOutOfRangeContainerStyle: {},
                   dayOutOfRangeTextStyle: {},
                   todayContainerStyle: {},
                   todayTextStyle: {
                     color: '#6d95da',
                   },
                   activeDayContainerStyle: {
                     backgroundColor: '#6d95da',
                   },
                   activeDayTextStyle: {
                     color: 'white',
                   },
                   nonTouchableLastMonthDayTextStyle: {},
                 }}
               />
               <Button  onPress={this.logOut} title="로그아웃"/>
           </View>

        );
  }

}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor:'#ffffff',
    },
    bookAddBtn:{
     backgroundColor:'#ffffff',
     width:50,
     marginLeft:17,
     marginTop:3,
     marginBottom:60
    },
    addTxt:{
     fontSize: 30,
     color: '#E5E5E5'
    },
    titleTxt:{
     fontWeight: "bold",
     fontSize: 10,
     marginLeft:15,
     color: '#000000'
    }
})

//*중요* container에 store 연결(없으면 연결 절대 안됨;;)
export default (inject('bookNoteStore')(observer(CalenderPageLode)));
