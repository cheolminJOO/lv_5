import {combineReducers, configureStore} from '@reduxjs/toolkit'
import songSlice from '../modules/Song'
import idSlice from '../modules/Id'
import imageSlice from '../modules/Image'
import commentSlice from '../modules/Comment'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
  song : songSlice,
  id : idSlice,
  songImage : imageSlice,
  comment : commentSlice,
})

const persistConfig = {
  key : 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer : persistedReducer
})
