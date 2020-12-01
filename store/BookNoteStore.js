import { observable, action, makeObservable } from 'mobx';


class BookNoteStore{

    //선택한 날짜 데이터 state 변수-변수앞에 무조건 @observable 붙여야됨(안붙이면 연결 안됨)
    @observable selectedDate = null;

    //건드리지마
    constructor() {
        // Just call it here
       makeObservable(this);
    }

    //선택 날짜 저장 함수(@action.bound 함수마다 무조건 붙이기)
    @action.bound
    changeSelectDay(dayData) {
        //이걸 모르진 않겠지..
        this.selectedDate=dayData;
    }

}

export default BookNoteStore;