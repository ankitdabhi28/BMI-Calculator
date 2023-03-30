import { createSlice } from "@reduxjs/toolkit";

export const Info = createSlice({
  name: "Info",
  initialState: {
    Info:null ,
  },
  reducers: {
    // GET USERS
    setInfo: (state, action) => {
      state.Info = action.payload
    //   state.Info= [...state.Info, action.payload];
    },

  },
});

export const { setInfo } = Info.actions;
// , clear 

export default Info.reducer;
