import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  value: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.value.push(action.payload);
    },
    removeContact(state, action) {
      state.value = state.value.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});

const persistConfig = {
  key: 'contactList',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer,
);

export const { addContact, removeContact, filterContacts } =
  contactSlice.actions;

export const getContacts = state => state.contacts.value;
