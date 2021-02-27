import searchHNStateReducer from '../features/searchHNState.js'
import {createStore } from 'redux'

const store = createStore(searchHNStateReducer);
export default store;

