import { observable, action } from 'mobx';

class BookNoteStore{
    @observable selectedDate = null;

    @action.bound
    changeSelectDay(dayData) {
        console.log(dayData);
        this.selectedDate=dayData;
    }
}

export default BookNoteStore;