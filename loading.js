import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Loading() {
    return (
      <View style={styles.container}>
        <Image style={styles.iconImg}
        source={require('./icon/iconM.png')}/>
        <View>
            <Text style={styles.title}>글구멍</Text>
            <Text style={styles.subTitle}>글을 이해하는 지혜</Text>
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
         padding:50
    },
    title:{
         fontWeight: "bold",
         fontSize: 25,
         marginTop:20
    },
    subTitle:{
         marginTop:5,
         fontSize: 10,
    }

})
