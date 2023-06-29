import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFilter } = filterSlice.actions;

export const getFilterValue = state => state.filter.value;
