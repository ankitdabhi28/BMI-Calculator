
import { createSlice } from "@reduxjs/toolkit";

export const Height = createSlice({
  name: "Height",
  initialState: {
    Height:null, 
    Bmi:null,
    Weight:null, 
    Info:null ,
    ForArr :[{}],
  },
  reducers: {
    // GET USERS
    setHeight: (state, action) => {
      state.Height = action.payload
    //   state.Height= [...state.Height, action.payload];
  
    },
    setBmi: (state, action) => {
      state.Bmi = action.payload
    //   state.Bmi= [...state.Bmi, action.payload];
    },
    setWeight: (state, action) => {
      state.Weight = action.payload
    //   state.Weight= [...state.Weight, action.payload];
    },
    setInfo: (state, action) => {
      state.Info = action.payload
    //   state.Info= [...state.Info, action.payload];
    },  
    setForArr: (state, action) => {
      state.Info = action.payload
    //   state.Info= [...state.Info, action.payload];
    },  
    setDataPrint: (state, action) => {
      state.Info = action.payload
      // state.Info= [...state.DataPrint, action.payload];
    },

  },
});

export const { setHeight, setForArr,setBmi,setWeight,setInfo,setDataPrint } = Height.actions;
// , clear 

export default Height.reducer;
