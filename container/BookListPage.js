import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList } from 'react-native';
import { inject, observer } from 'mobx-react';
import BookItem from './BookItem';

class BookListPage extends Component {
     constructor(props) {
         super(props);
         const {monthBookList} = this.props.bookNoteStore;
         this.state = {
            data:this.addKeysToBooks(monthBookList)
         }
     }
     addBtnClick(item){
          this.props.navigation.navigate('MemoPage');
          this.props.bookNoteStore.changeSelectBook(item);
     }

     renderItem({item}){
        return(
            <BookItem
                title={item.key}
                writer={item.BOOKWRITER}
                addBtnClick={()=> this.addBtnClick(item)}
            />
        )
     }

     addKeysToBooks(books){
        return books.map(book => {
            return Object.assign(book, {key:book.BOOKTITLE});
        });
     }


     render(){
         return (
           <FlatList
                data={this.state.data}
                renderItem={this.renderItem.bind(this)}
           />
         );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
//        justifyContent: "center",
//        alignItems: "center",
        backgroundColor:'#ffffff',
    },
    img:{
       width:50,
       backgroundColor:'#D4D4D4',
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
})

export default (inject('bookNoteStore')(observer(BookListPage)));