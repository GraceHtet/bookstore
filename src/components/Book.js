import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook, deleteBookApi } from '../redux/books/booksSlice';
import '../styles/Book.css';

// eslint-disable-next-line object-curly-newline
const Book = ({ id, title, author, category }) => {
  const dispatch = useDispatch();
  return (
    <>
      <article className="book">
        <div className="info-container">
          <p className="category">{category}</p>
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>

          <div className="btn-container">
            <Button value="Comment" />
            <hr />
            <Button
              className="remove-btn"
              onClick={() => {
                dispatch(removeBook(id));
                dispatch(deleteBookApi(id));
              }}
              value="Remove"
            />
            <hr />
            <Button value="Edit" />
          </div>
        </div>
        <div className="progress-chapter">
          <div className="percent-container">
            <div className="circle" />
            <div className="percent-info">
              <p className="percent">64%</p>
              <p className="status">Completed</p>
            </div>
          </div>

          <hr />
          <div className="book-chap">
            <p className="chap-now">Current Chapter</p>
            <p className="chap">Chapter 17</p>
            <Button className="update-btn" value="UPDATE PROGRESS" />
          </div>
        </div>
      </article>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
