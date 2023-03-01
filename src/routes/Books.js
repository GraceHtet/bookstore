import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const { booksList } = useSelector((state) => state.books);
  return (
    <>
      {booksList.map((each) => (
        <Book key={each.item_id} id={each.item_id} title={each.title} author={each.author} />
      ))}
      <Form />
    </>
  );
};

export default Books;
