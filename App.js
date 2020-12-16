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
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationContainer } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalenderPage from './container/CalenderPage';
import MemoPage from './container/MemoPage';
import BookListPage from './container/BookListPage';
import BookItem from './container/BookItem';
import LoginPage from './container/LoginPage';
import SignUpPage from './container/SignUpPage';
import BookSearch from './container/BookSearch';
import { Provider } from 'mobx-react';
import stores from './store/index';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CalenderStack() {
  return (
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
         <Stack.Screen
          name="Loading"
          component={Loading}
          options={{ title: 'Loading' }}/>
        <Stack.Screen
          name="CalenderPage"
          component={CalenderPage}
          options={{ title: 'CalenderPage' }}/>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ title: 'LoginPage' }} />
        <Stack.Screen
            name="BookListPage"
            component={BookListPage}
            options={{ title: 'BookListPage' }} />
        <Stack.Screen
          name="MemoPage"
          component={MemoPage}
          options={{ title: 'MemoPage' }} />
        <Stack.Screen
          name="BookSearch"
          component={BookSearch}
          options={{ title: 'BookSearch' }} />
      </Stack.Navigator>
  );
}

function MemoStack() {
  return (
      <Stack.Navigator
        initialRouteName="BookListPage"
        screenOptions={{
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="BookListPage"
          component={BookListPage}
          options={{ title: 'BookListPage' }}/>
        <Stack.Screen
          name="MemoPage"
          component={MemoPage}
          options={{ title: 'MemoPage' }} />
      </Stack.Navigator>
  );
}


export default class App extends React.Component {
    //splash 화면 띄우기
    componentDidMount(){
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    }

  render() {
  return(
    //provider안에 있는 container들에 store 데이터 넘겨줌
     <Provider {...stores}>
            <NavigationContainer>
               <Tab.Navigator
                      initialRouteName="calender"
                      screenOptions={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                  let iconName;
//                                  if (route.name === 'calender') {
//                                    iconName = 'calender-outline';
//                                  } else if (route.name === 'memo'){
//                                    iconName = 'document-text-outline';
//                                  }
                                  // You can return any component that you like here!
                                  return <Icon name={iconName} size={size}  color={color}/>;
                                },
                              })}
                              tabBarOptions={{
                                activeTintColor: 'black',
                                inactiveTintColor: 'gray',
                              }}
                        >
                      <Tab.Screen
                        name="calender"
                        component={CalenderStack}/>
                      <Tab.Screen
                        name="memo"
                        component={MemoStack}/>
                    </Tab.Navigator>
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

