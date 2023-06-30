import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  removeContact,
} from './operations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.value = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.value.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [removeContact.pending](state) {
      state.isLoading = true;
    },
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.value.findIndex(
        value => value.id === action.payload.id,
      );
      state.value.splice(index, 1);
    },
    [removeContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Редюсер слайса
export const contactsReducer = contactSlice.reducer;

// Селекторы
export const selectContacts = state => state.contacts.value;
export const selectIsloading = state =>
  state.contacts.isLoading;
export const selectError = state => state.contacts.error;
