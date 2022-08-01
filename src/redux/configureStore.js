import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import CoinReducer from './fetchApi';

const reducer = combineReducers({
  CoinReducer,
});

export const store = configureStore({
  reducer,
  Middleware: [thunk],
});

export default store;
