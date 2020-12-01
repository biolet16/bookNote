import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
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

//선택한 날짜 및 스타일 설정 함수
  selectDay(day){
    //저장할 날짜, 스타일 변수
    let dayData={[day.year + "-" + day.dateString.split('-')[1] + "-" + day.dateString.split('-')[2]]:{selected: true, marked: true, selectedColor: "rgb(76,174,249)"}};
    //store 저장 함수 호출
    this.props.bookNoteStore.changeSelectDay(dayData);
    //memo 페이지 오픈
    this.props.navigation.navigate('MemoPage');
  }

  render(){
      const {selectedDate, id} = this.props.bookNoteStore;
      console.log(selectedDate);
      return (
           <View style={styles.container}>
             <View>
               <Text style={styles.titleTxt}>이달의 책</Text>
               <TouchableOpacity activeOpacity={0.8}  style={styles.bookAddBtn} >
                     <Text style={styles.addTxt}>+</Text>
               </TouchableOpacity>
             </View>
               <Calendar
                 onChange={(range) => console.log(range)}
                 onDayPress={(day) => this.selectDay(day)}
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
     marginTop:3
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
