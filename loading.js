import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Loading ({navigation}){
         return (
           <View style={styles.container}>
             <View>
                 <Image style={styles.iconImg}
                 source={require('./icon/iconM.png')}/>
             </View>
             <View>
                 <Text style={styles.title}>글구멍</Text>
                 <Text style={styles.subTitle}>글을 이해하는 지혜</Text>
             </View>
             <View style={styles.btnContainer}>
                 <View style={styles.eachBtn}>
                     <Button
                       title="로그인"
                       color="#C0C0C0"
                     />
                 </View>
                 <View style={styles.eachBtn}>
                     <Button
                        onPress={() => navigation.navigate('CalenderPage')}
                       title="캘린더"
                       color="#C0C0C0"
                     />
                 </View>
                 <View style={styles.eachBtn}>
                     <Button
                       title="책검색"
                       color="#C0C0C0"
                     />
                 </View>
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
