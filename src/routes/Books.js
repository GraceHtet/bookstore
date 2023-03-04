import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getAllBooks, getStatus, getBookApi } from '../redux/books/booksSlice';
import '../styles/Books.css';

const Books = () => {
  const dispatch = useDispatch();

  const booksList = useSelector(getAllBooks);
  const status = useSelector(getStatus);

  useEffect(() => {
    if (status === false) dispatch(getBookApi());
  }, [dispatch, status]);

  let content;
  if (status === true) {
    content = booksList.map((each) => (
      <Book
        key={each.item_id}
        id={each.item_id}
        title={each.title}
        author={each.author}
        category={each.category}
      />
    ));
  }

  return (
    <>
      <main className="books-container">
        <div className="book-info">{content}</div>
        <hr />
        <Form />
      </main>
    </>
  );
};

export default Books;
