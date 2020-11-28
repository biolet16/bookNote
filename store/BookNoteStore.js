import { observable, action, makeObservable } from 'mobx';


class BookNoteStore{

    @observable selectedDate = null;

      constructor() {
        // Just call it here
        makeObservable(this);
      }

    @action.bound
    changeSelectDay(dayData) {
//        console.log(dayData);
        this.selectedDate=dayData;
    }
}

export default BookNoteStore;