import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { postBookApi, addBook } from '../redux/books/booksSlice';
import '../styles/Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: crypto.randomUUID(),
      title,
      author,
      category: 'Mystery',
    };
    if (title !== '' && author !== '') {
      dispatch(addBook(book));
      dispatch(postBookApi(book));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="book-form">
      <h2>Add a New Book</h2>
      <form action="" method="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Book Title"
          onChange={onTitleChanged}
          className="form-control name-inp"
          value={title}
        />
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Book Author"
          onChange={onAuthorChanged}
          className="form-control author-inp"
          value={author}
        />
        <Button type="submit" className="add-btn" value="Add book" />
      </form>
    </div>
  );
};

export default Form;
