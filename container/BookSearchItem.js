import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

class BookSearchItem extends Component {

    render(){
        const {title, writer, img} = this.props;
        console.log('BookSearchItem',img);
        return (
           <View style={styles.bookItem}>
             <Image source={{uri:img}} style={styles.bookImg}/>
             <View style={styles.txtView}>
                 <Text style={styles.title}>{title}</Text>
                 <Text style={styles.author}>{writer}</Text>
             </View>
           </View>
         );
    }

}

const styles = StyleSheet.create({
    bookItem: {
        flexDirection: 'row',
        backgroundColor:'#ffffff',
        borderBottomColor:'#E9E8E8',
        borderBottomWidth:1,
        padding:5,
        height:150,
    },
    bookImg:{
        width:100,
        marginLeft:10,
        marginRight:15
    },
    cover: {
        flex: 1,
        height:150,
        resizeMode:'contain'
    },
    info: {
         flex: 3,
         alignItems:'flex-end',
         flexDirection: 'column',
         alignSelf:'center',
         padding:20,
    },
    author:{
        fontSize:12
    },
    title:{
        fontSize:13,
        marginBottom:8,
        marginTop:10,
        fontWeight:'bold'
    },
    txtView:{
        width:200
    },
    btnView:{
       marginLeft:100,
       marginBottom:0,
    },
    addTxt:{
       fontSize: 40,
       color: '#E5E5E5'
    },
    bookAddBtn:{
        backgroundColor:'#ffffff',
        width:50,
        marginLeft:17,
    },
});

export default (inject('bookNoteStore')(observer(BookSearchItem)));