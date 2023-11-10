import { createSlice } from "@reduxjs/toolkit"


const initialState = { 
  songArr : []
}

const songSlice = createSlice({
  name : 'song',
  initialState,
  reducers : {
    addSong : (state,action) => {
      state.songArr.push(action.payload)
    },
    deleteSong : (state,action) => {
      state.songArr = state.songArr.filter((song) => song.id !== action.payload)
    }, //state.songArr = / 이걸 써줘야 상태업데이트가 된다
  }
})

export default songSlice.reducer;
export const {addSong,deleteSong} = songSlice.actions