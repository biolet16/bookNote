import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
class MemoPage extends Component {
     render(){
        const {selectBookData} = this.props.bookNoteStore;
        console.log('MemoPage',selectBookData)
         return (
           <View style={styles.container}>
             <View>
                 <Text>memo</Text>
             </View>
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
})

export default (inject('bookNoteStore')(observer(MemoPage)));