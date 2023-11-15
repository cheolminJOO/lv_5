import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  commentArr : []

}

const commentSlice = createSlice({
  name : 'comment',
  initialState,
  reducers : {
    addComment : (state,action) => {
      state.commentArr.push(action.payload)
    }
  }

})

export default commentSlice.reducer;
export const {addComment} = commentSlice.actions
