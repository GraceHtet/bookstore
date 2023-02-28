import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  // const list = [
  //   {
  //     id: 1,
  //     title: 'Green Ghost',
  //     author: 'Grey',
  //   },
  //   {
  //     id: 2,
  //     title: 'Gone with the wind',
  //     author: 'Maybel',
  //   },
  // ];

  const { booksList } = useSelector((state) => state.books);
  return (
    <>
      {booksList.map((each) => (
        <Book key={each.id} title={each.title} author={each.author} />
      ))}
      <Form />
    </>
  );
};

export default Books;
