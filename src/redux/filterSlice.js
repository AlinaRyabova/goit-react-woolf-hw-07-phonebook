import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setStatusFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
