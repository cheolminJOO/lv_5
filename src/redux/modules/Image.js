import { createSlice } from "@reduxjs/toolkit"


const initialState = { 
  imageArr : []
}

const imageSlice = createSlice({
  name : 'songImage',
  initialState,
  reducers : {
    addImage : (state,action) => {
      state.imageArr.push(action.payload)
    },
  }
})

export default imageSlice.reducer;
export const {addImage} = imageSlice.actions