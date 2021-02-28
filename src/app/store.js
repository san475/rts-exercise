import searchHNStateReducer from '../features/searchHNState.js'
import {createStore } from 'redux'

export const store = createStore(searchHNStateReducer); 