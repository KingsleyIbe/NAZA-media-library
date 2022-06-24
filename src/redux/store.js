// import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import photosReducer from './media/media';
import searchReducer from './media/search';

const reducer = combineReducers({
  photosReducer,
  searchReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
