import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook, deleteBookApi } from '../redux/books/booksSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>

        <Button
          className="remove-btn"
          onClick={() => {
            dispatch(removeBook(id));
            dispatch(deleteBookApi(id));
          }}
          value="Remove"
        />
      </div>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
