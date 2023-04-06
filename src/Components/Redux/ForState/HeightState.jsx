
import { createSlice } from "@reduxjs/toolkit";

export const Height = createSlice({
  name: "Height",
  initialState: {
    Height:null, 
    Bmi:null,
    Weight:null, 
    Info:null ,
  },
  reducers: {
    setHeight: (state, action) => {
      state.Height = action.payload
    },
    setBmi: (state, action) => {
      state.Bmi = action.payload
    },
    setWeight: (state, action) => {
      state.Weight = action.payload
    },
    setInfo: (state, action) => {
      state.Info = action.payload
    }
  },
});

export const { setHeight,setBmi,setWeight,setInfo } = Height.actions;

export default Height.reducer;
