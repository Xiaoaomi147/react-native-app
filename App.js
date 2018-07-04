/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Router from './src/Router';
import './src/component/SetTheme';
import {
  Provider
} from 'react-redux';
import configureStore from './src/store';
import rootSaga from './src/sagas';

const store = configureStore();
store.runSaga(rootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
