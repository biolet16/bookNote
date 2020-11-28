import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function MemoPage ({navigation}){
         return (
           <View style={styles.container}>
             <View>
                 <Text>memo</Text>
             </View>
           </View>
         );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})