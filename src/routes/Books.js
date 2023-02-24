import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const list = [
    {
      id: 1,
      title: 'Green Ghost',
      author: 'Grey',
    },
    {
      id: 2,
      title: 'Gone with the wind',
      author: 'Maybel',
    },
  ];
  return (
    <>
      {list.map((each) => (
        <Book key={each.id} title={each.title} author={each.author} />
      ))}
      <Form />
    </>
  );
};

export default Books;
