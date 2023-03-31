
import { createSlice } from "@reduxjs/toolkit";

export const Height = createSlice({
  name: "Height",
  initialState: {
    Height:(null), 
  },
  reducers: {
    // GET USERS
    setHeight: (state, action) => {
      state.Height = action.payload
    //   state.Height= [...state.Height, action.payload];
    },

  },
});

export const { setHeight } = Height.actions;
// , clear 

export default Height.reducer;
