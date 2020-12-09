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
         <View style={styles.container}>
            <Text style={styles.titleTxt}>최근 책</Text>
            {
                this.state.data!==undefined && this.state.data!==null && this.state.data.length!==0 &&
                      <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem.bind(this)}
                       />
                ||
                <Text style={styles.noDataTxt}>등록된 책이 없습니다..</Text>
            }

         </View>
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
    noDataTxt:{
        fontSize:20,
        fontWeight:'bold',
        color: '#BFBFBF',
        marginTop:300,
        marginLeft:100
    },
    titleTxt:{
        fontSize:20,
        fontWeight:'bold',
        color: '#000000',
        marginTop:20,
        marginLeft:10
    },
    list:{
        borderRadius: 5,
    }
});

export default (inject('bookNoteStore')(observer(BookListPage)));