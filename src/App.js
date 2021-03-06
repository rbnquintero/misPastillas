import React, { Component } from 'react';

// REDUX
var { createStore, applyMiddleware } = require('redux');
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import reducers from './reducers';
var { Provider } = require('react-redux');

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware, promise, logger));


import MisPastillas from './MisPastillas';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <MisPastillas />
      </Provider>
    );
  }
}
