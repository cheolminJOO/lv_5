import {configureStore} from '@reduxjs/toolkit'
import songSlice from '../modules/Song'
import idSlice from '../modules/Id'
import imageSlice from '../modules/Image'
import commentSlice from '../modules/Comment'

export const store = configureStore({
  reducer : {
    song : songSlice,
    id : idSlice,
    songImage : imageSlice,
    comment : commentSlice
    
  }
})