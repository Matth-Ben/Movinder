/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Nav from './Components/Navigation.js';

import {enableScreens} from 'react-native-screens';
enableScreens();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    );
  }
}
