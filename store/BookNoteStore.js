import { observable, action, makeObservable, computed } from 'mobx';
import firestore from '@react-native-firebase/firestore';

class BookNoteStore{

    @observable selectedDate = null;
    @observable monthBookList = [];

      constructor() {
        // Just call it here
        makeObservable(this);
      }


    @action.bound
    changeSelectDay(dayData) {
        this.selectedDate=dayData;
    }

    //firebase DB 데이터 가져오는 예시 함수(월간 책 리스트 가져오는 함수)
    async getMonthBookList(){
        let list=[];
        //collection(DB명),
        await firestore()
          .collection('calender')
          .get()
          .then(doc => {
            //doc._docs:DB데이터리스트 data._data:DB데이터
            doc._docs.map(data => {
             console.log(data._data);
             list.push(data._data);
            });
            //store state 데이터 매핑
            this.monthBookList=list;
            console.log(this.monthBookList);
          });
    }
}

export default BookNoteStore;