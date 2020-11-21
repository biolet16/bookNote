/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Loading from "./loading"
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return <Loading/>;
  }
}
const styles = StyleSheet.create({
    container: {
            flex: 1,
            alignContent: "center"
        }
});
