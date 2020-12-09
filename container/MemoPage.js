import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
class MemoPage extends Component {
     componentDidMount() {
        this.props.bookNoteStore.getDayMemoList();
     }
     render(){
        const {selectBookData, memoList} = this.props.bookNoteStore;
        console.log('MemoPage',selectBookData, memoList)
         return (
           <View style={styles.container}>
             <View style={styles.txtView}>
                 <Text style={styles.title}>{selectBookData.key}</Text>
             </View>
             <View style={styles.shadowContainerStyle}>
                 <TouchableOpacity activeOpacity={0}  style={styles.bookAddBtn}>
                        <Text style={styles.addTxt}>+</Text>
                  </TouchableOpacity>
             </View>
             {
                memoList.length!==0 &&
                memoList.map(data => {
                    return(
                        <View style={styles.shadowContainerStyle}>
                                    <Text style={styles.titleTxt}>{data.BOOKPHRASE}</Text>
                         </View>
                    )
                })
             }
           </View>
         );
     }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
    },
    txtView:{
        marginTop:30,
        marginLeft:25,
        marginBottom:30,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color: '#B0B0B0'
    },
    shadowContainerStyle: {   //<--- Style with elevation
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        margin:10
    },
    bookAddBtn:{
        height:100,
        marginTop:30,
        marginLeft:'50%',
    },
    addTxt:{
       fontSize: 45,
       color: '#E5E5E5'
    },
    titleTxt:{
       fontSize: 20,
       color: '#E5E5E5',
       height:100,
       marginTop:10,
       marginLeft:20,
       fontWeight:'bold',
    },
})

export default (inject('bookNoteStore')(observer(MemoPage)));