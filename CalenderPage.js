import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function CalenderPageLode() {

    return (
      <View style={styles.container}>
        <View>
            <Text>캘린더</Text>
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
