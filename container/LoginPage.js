import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';

export default function LoginPage ({navigation}){
         return (
           <View style={styles.container}>
             <TextInput/>
             <TextInput/>
             <Button title="로그인"/>
             <View>
                 <Text>Login</Text>
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