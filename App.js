/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Loading from "./container/loading"
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack' ;
import CalenderPageLode from './container/CalenderPage';
import MemoPage from './container/MemoPage';
import BookListPage from './container/BookListPage';
import BookItem from './container/BookItem';
import LoginPage from './container/LoginPage';
import SignUpPage from './container/SignUpPage';
import { Provider } from 'mobx-react';
import stores from './store/index';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
  return(
    //provider안에 있는 container들에 store 데이터 넘겨줌
      <Provider {...stores}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Loading">
                <Stack.Screen name="Loading" component={Loading} />
                <Stack.Screen name="CalenderPage" component={CalenderPageLode} />
                <Stack.Screen name="BookListPage" component={BookListPage} />
                <Stack.Screen name="BookItem" component={BookItem} />
                <Stack.Screen name="MemoPage" component={MemoPage} />
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="SignUpPage" component={SignUpPage} />
              </Stack.Navigator>
            </NavigationContainer>
      </Provider>
        );
  }
}
const styles = StyleSheet.create({
    container: {
            flex: 1,
            alignContent: "center"
        }
});
