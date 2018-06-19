import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import AppNavigation from './src/navigation/appNavigation';
import reducer from './src/reducer';

// Must be run before reduxify
const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const App = reduxifyNavigator(AppNavigation, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const client = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  responseType: 'json',
});

const middleware = [axiosMiddleware(client), navMiddleware];

const store = createStore(reducer, applyMiddleware(...middleware));

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
