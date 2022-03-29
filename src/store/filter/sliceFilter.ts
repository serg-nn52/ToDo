/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

type FilterType = {
  value: string;
};
const initialState: FilterType = { value: "" };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filter: (state: FilterType, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
export const selectFilter = (state: RootState) => state.filter.value;
export default filterSlice.reducer;
