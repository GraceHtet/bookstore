import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// eslint-disable-next-line operator-linebreak
const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RAUTP306QCQqd49yd8a7/books';

const initialState = {
  id: '',
  booksList: [],
  isLoading: false,
};

export const getBookApi = createAsyncThunk('books/getBookApi', async () => {
  const res = await axios.get(url);
  return { ...res.data };
});

export const postBookApi = createAsyncThunk('books/postBookApi', async (book) => {
  const res = await axios.post(url, book);
  return res.data;
});

export const deleteBookApi = createAsyncThunk('books/deleteBookApi', async (id) => {
  console.log(id);
  const res = await axios.delete(`${url}/${id}`);
  return res.data;
});

const newArr = (load) => {
  const keys = Object.keys(load);
  const arr = [];
  keys.forEach((key) => {
    arr.push({
      item_id: key,
      ...load[key][0],
    });
  });
  return arr;
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksList.push(action.payload);
    },
    removeBook: (state, action) => {
      const list = { ...state };
      list.booksList = state.booksList.filter((e) => e.item_id !== action.payload);
      return list;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBookApi.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getBookApi.fulfilled, (state, action) => {
        const arr = newArr(action.payload);
        return {
          booksList: [...arr],
          isLoading: true,
        };
      })
      .addCase(postBookApi.fulfilled, (state) => ({
        ...state,
      }))
      .addCase(deleteBookApi.fulfilled, (state) => ({
        ...state,
        isLoading: true,
      }));
  },
});

export const getAllBooks = (state) => state.books.booksList;
export const getStatus = (state) => state.books.isLoading;

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
