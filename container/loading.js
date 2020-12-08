import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default class Loading extends React.Component{
    componentDidMount() {//로그인했는지 안했는지.
        firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        this.props.navigation.navigate(user ? 'CalenderPage' : 'LoginPage')
        })
    }

    render(){
       return (
           <View style={styles.container}>
             <View>
                 <Image style={styles.iconImg}
                 source={require('../icon/iconM.png')}/>
             </View>
             <View>
                 <Text style={styles.title}>글구멍</Text>
                 <Text style={styles.subTitle}>글을 이해하는 지혜</Text>
             </View>
           </View>
       );
    }
}

/*export default function Loading ({navigation}){

}*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    iconImg:{
         height:'25%',
         width:'50%',
         padding:100,
    },
    title:{
         fontWeight: "bold",
         fontSize: 25,
         marginTop:20
    },
    subTitle:{
         marginTop:1,
         fontSize: 11,
         textDecorationLine: "underline",
    },
    btnContainer:{
         marginTop:50,
         flexDirection: "row"
    },
    eachBtn:{
         marginLeft:10,
    },
})
