
import { createSlice } from "@reduxjs/toolkit";

export const DataPrint = createSlice({
  name: "DataPrint",
  initialState: {
    DataPrint:[],
  },
  reducers: {
    setDataPrint: (state, action) => {
      state.DataPrint = action.payload
        //  state.DataPrint= [...state.DataPrint, action.payload];
    },
  },
});

export const { setDataPrint } = DataPrint.actions;
export default DataPrint.reducer;