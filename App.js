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
import { NavigationContainer } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack' ;
import CalenderPageLode from './CalenderPage';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
  return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Loading">
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="CalenderPage" component={CalenderPageLode} />
          </Stack.Navigator>
        </NavigationContainer>
        );
  }
}
const styles = StyleSheet.create({
    container: {
            flex: 1,
            alignContent: "center"
        }
});
