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
import BookSearchPage from './container/BookSearchPage';
import { Provider } from 'mobx-react';
import stores from './store/index';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function loginStack(){
    return (
         <Stack.Navigator
                initialRouteName="LoginPage"
                screenOptions={{
                  headerStyle: { backgroundColor: '#000000' },
                  headerTintColor: '#fff',
                  headerTitleStyle: { fontWeight: 'bold' }
                }}>
             <Stack.Screen
                  name="LoginPage"
                  component={LoginPage}
                  options={{ title: 'LoginPage' }} />
                <Stack.Screen
                  name="SignUpPage"
                  component={SignUpPage}
                  options={{ title: 'SignUpPage' }} />
              <Stack.Screen
                name="HomeBottomTab"
                component={HomeBottomTab}
               />
        </Stack.Navigator>
    );
}

function CalenderStack() {
  return (
      <Stack.Navigator
        initialRouteName="CalenderPage"
        screenOptions={{
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="CalenderPage"
          component={CalenderPage}
          options={{ title: 'CalenderPage' }}/>
        <Stack.Screen
            name="BookListPage"
            component={BookListPage}
            options={{ title: 'BookListPage' }} />
        <Stack.Screen
          name="MemoPage"
          component={MemoPage}
          options={{ title: 'MemoPage' }} />
        <Stack.Screen
          name="BookSearchPage"
          component={BookSearchPage}
          options={{ title: 'BookSearchPage' }} />
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

function HomeBottomTab(){
    return(
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
  console.log('App',stores.bookNoteStore.userToken);
  return(
    //provider안에 있는 container들에 store 데이터 넘겨줌
     <Provider {...stores}>
            <NavigationContainer>
                {stores.bookNoteStore.userToken == null ?(
                   loginStack()
                ):(
                   HomeBottomTab()
                )}

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


