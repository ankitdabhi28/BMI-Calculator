
import { createSlice } from "@reduxjs/toolkit";

export const DataPrint = createSlice({
  name: "DataPrint",
  initialState: {
    DataPrint:[],
  },
  reducers: {
    setDataPrint: (state, action) => {
      state.Info = action.payload
    //   state.Info= [...state.DataPrint, action.payload];
    },

  },
});

export const { setDataPrint } = DataPrint.actions;
// , clear 

export default DataPrint.reducer;
