import { createSlice } from "@reduxjs/toolkit";

export const Bmi = createSlice({
  name: "Bmi",
  initialState: {
    Bmi:null ,
  },
  reducers: {
    // GET USERS
    setBmi: (state, action) => {
      state.Bmi = action.payload
    //   state.Bmi= [...state.Bmi, action.payload];
    },

  },
});

export const { setBmi } = Bmi.actions;
// , clear 

export default Bmi.reducer;
