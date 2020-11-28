import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
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

@inject('bookNoteStore')
@observer
class CalenderPageLode extends React.Component {
  state = {
      selectedDate:null,
  };

  selectDay(day){
    let dayData={[day.year + "-" + day.dateString.split('-')[1] + "-" + day.dateString.split('-')[2]]:{selected: true, marked: true, selectedColor: "rgb(76,174,249)"}};
    this.props.bookNoteStore.changeSelectDay(dayData);
    this.props.navigation.navigate('MemoPage');
  }

  render(){
      const {selectedDate} = this.props.bookNoteStore;
      return (
           <View style={styles.container}>
              <View>
                <Button
//                    onPress={() => navigation.navigate('CalenderPage')}
                   title="+"
//                   color="#C0C0C0"
                 />
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
})

export default CalenderPageLode;
