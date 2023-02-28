import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksList: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksList.push(action.payload);
    },
    removeBook: (state, action) => state.booksList.filter((e) => e.id !== action.payload.id),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
