import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList } from 'react-native';
import {GoogleBookSearch, BookSearch} from 'react-native-google-books';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import BookSearchItem from './BookSearchItem';

class BookSearchPage extends Component {
    state={
        searchList:true
    }
     constructor(props) {
         super(props);
         this.state = {
            data:[]
         }
     }

      renderItem({item}){
         return(
             <BookSearchItem
                 title={item.title === undefined ? '' : item.title}
                 writer={item.authors === undefined ? '' : item.authors[0]}
                 img={item.imageLinks === undefined ? '' : item.imageLinks.thumbnail}
             />
         )
      }

       addKeysToBooks(books){
//       console.log('addKeysToBooks',books);
          return books.map(book => {
              return Object.assign(book, {key:book.title});
          });
       }

      async getGameofThronesBooks(){
        const {searchBookList} = this.props.bookNoteStore;
        const {searchList} = this.state;
        let style={...searchList, 'display':'none'};
        this.setState({
            data:this.addKeysToBooks(searchBookList)
        });
        this.setState({
            searchList:false
        });
      }

      changeBookTxt(book){
//        console.log('changeBookTxt',book);
        this.setState({
            searchList:true
        });
        let bookList=[];
        book.map(data => {
        console.log('imageLinks',data.volumeInfo.imageLinks)
            bookList.push(data.volumeInfo);
        });
        this.props.bookNoteStore.changeSearchBookList(bookList);
      }

     render(){
//        console.log('render',this.state.data);
         return (
           <View style={styles.container}>
               <View style={styles.allSearch}>
                    <View style={styles.searchBox}>
                        <GoogleBookSearch
                            apikey={"AIzaSyBUp6R5qIMoe0sIcfJXoxkZzmPiVTXv5mU"}
                            searchContainerStyle={{marginTop:32, width:'90%'}}
                            searchInputStyle={{fontSize:16}}
                            resultContainerStyle={this.state.searchList ? {padding:4} : {padding:4, display:'none'}}
                            resultItemStyle={{color:'blue'}}
                            interval={300}
                            searchResult={(result) => this.changeBookTxt(result)}
                            onResultPress={(book)=> console.log('onResultPress',book)}
                         />
                    </View>
                    <View style={styles.searchBtn}>
                        <TouchableOpacity activeOpacity={0.8}  style={styles.bookAddBtn} onPress={() => this.getGameofThronesBooks()}>
                            <Icon style={styles.searchIcon} name='search' size={20}/>
                        </TouchableOpacity>
                    </View>
               </View>
                <View style={styles.searchBookList}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem.bind(this)}
                     />
                </View>
           </View>
         );
     }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
    },
    allSearch:{
        flexDirection: 'row',
    },
    searchBox:{
       width:'80%'
    },
    searchBtn:{
       width:'10%',
       marginTop:37,
    },
    bookAddBtn:{
     backgroundColor:'#E5E5E5',
     borderRadius: 2,
     width:45,
     height:40
    },
    searchIcon:{
     color: '#ffffff',
     margin:5,
     paddingTop:2,
     paddingLeft:8
    },
    searchBookList:{
        width:'100%'
    }
});

export default (inject('bookNoteStore')(observer(BookSearchPage)));