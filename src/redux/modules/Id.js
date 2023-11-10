import { createSlice } from "@reduxjs/toolkit";



//초기값 설정
const initialState = {
  id : 0,
}

const idSlice = createSlice({
  name: 'id',
  initialState,
  reducers : {
    addNumber : (state,action) => {  
      state.id = state.id + 1; 
    }
  },
});

export default idSlice.reducer; 

export const {addNumber} = idSlice.actions 