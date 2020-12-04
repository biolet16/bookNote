import { observable, action, makeObservable, computed } from 'mobx';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';

class BookNoteStore{

    //선택한 날짜 데이터 state 변수-변수앞에 무조건 @observable 붙여야됨(안붙이면 연결 안됨)
    @observable selectedDate = null;
    //책 리스트
    @observable bookList = [];
    //이 달의 책 리스트
    @observable monthBookList = [];
    //선택된 달
    @observable currentMonth = moment().format('MM');
    //임시 아이디
    @observable userId = 'bora';

    //건드리지마
    constructor() {
        // Just call it here
       makeObservable(this);
    }

    @action.bound
    changeSelectDay(dayData) {
        this.selectedDate=dayData;
    }

    @action.bound
    changeSelectMon(monData) {
        this.currentMonth=monData;
        this.findMonBookList(monData,this.bookList);
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
//             console.log(data._data);
                list.push(data._data);
            });
            //store state 데이터 매핑
            this.bookList=list;
            this.findMonBookList(this.currentMonth,this.bookList);
//            console.log(this.bookList);
          });
    }
    @action.bound
    findMonBookList(monData,bookList){
        let list=[];
        bookList.map(data => {
           let dataMonth=moment(data.DATE).format('MM');
           console.log(this.userId, data.ID, monData, dataMonth);
           if(this.userId===data.ID && monData===dataMonth){
              list.push(data);
           }
        });
        this.monthBookList=list;
        console.log('findMonBookList',this.monthBookList);
    }

    //선택 날짜 저장 함수(@action.bound 함수마다 무조건 붙이기)
    @action.bound
    changeSelectDay(dayData) {
        //이걸 모르진 않겠지..
        this.selectedDate=dayData;
    }

}

export default BookNoteStore;