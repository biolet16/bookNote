import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Loading() {
    return (
      <View>
        <Image style={{height:'50%', width:'50%'}}
        source={require('./icon/iconM.png')}/>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center"
    }
})
