/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

//import React, { Component } from 'react';
//import App from './App';


//import {
//  AppRegistry,
//  Navigator
//} from 'react-native'
//
//class ReactNativeMobX extends Component {
//  renderScene (route, navigator) {
//    return <route.component {...route.passProps} navigator={navigator} />
//  }
//  configureScene (route, routeStack) {
//    if (route.type === 'Modal') {
//      return Navigator.SceneConfigs.FloatFromBottom
//    }
//    return Navigator.SceneConfigs.PushFromRight
//  }
//  render () {
//    return (
//      <Navigator
////        configureScene={this.configureScene.bind(this)}
////        renderScene={this.renderScene.bind(this)}
//        initialRoute={{
//          component: App,
//          passProps: {
//            store: bookNoteStore
//          }
//        }} />
//    )
//  }
//}
//
//AppRegistry.registerComponent(appName, () => ReactNativeMobX);
