import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigation from '../navigation/appNavigation';
import utils from './utils';

const nav = createNavigationReducer(AppNavigation);

export default combineReducers({
  nav,
  utils,
});
