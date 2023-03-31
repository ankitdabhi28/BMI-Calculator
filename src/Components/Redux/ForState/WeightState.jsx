
import { createSlice } from "@reduxjs/toolkit";

export const Weight = createSlice({
  name: "Weight",
  initialState: {
    Weight:(null), 
  },
  reducers: {
    // GET USERS
    setWeight: (state, action) => {
      state.Weight = action.payload
    //   state.Weight= [...state.Weight, action.payload];
    },

  },
});

export const { setWeight } = Weight.actions;
// , clear 

export default Weight.reducer;
