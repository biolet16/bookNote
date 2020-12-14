import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import {GoogleBookSearch} from 'react-native-google-books';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class BookSearch extends Component {
     render(){
         return (
           <View style={styles.container}>
            <View style={styles.searchBox}>
                <GoogleBookSearch
                    apikey={"AIzaSyBUp6R5qIMoe0sIcfJXoxkZzmPiVTXv5mU"}
                    searchContainerStyle={{marginTop:32, width:'90%'}}
                    searchInputStyle={{fontSize:16}}
                    resultContainerStyle={{padding:4}}
                    resultItemStyle={{color:'blue'}}
                    interval={300}
                    searchResult={(result) => console.log(result)}
                    onResultPress={(book)=> console.log(book)}
                 />
            </View>
            <View style={styles.searchBtn}>
                <TouchableOpacity activeOpacity={0.8}  style={styles.bookAddBtn}>
                    <Icon style={styles.searchIcon} name='search' size={20}/>
                </TouchableOpacity>
            </View>
           </View>
         );
     }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'#ffffff',
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
});

export default (inject('bookNoteStore')(observer(BookSearch)));