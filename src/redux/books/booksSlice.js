import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksList: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksList.push({ item_id: crypto.randomUUID(), ...action.payload });
    },
    removeBook: (state, action) => {
      const list = { ...state };
      list.booksList = state.booksList.filter((e) => e.item_id !== action.payload);
      return list;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
