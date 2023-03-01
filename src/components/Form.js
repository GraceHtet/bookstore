import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author }));
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form action="" method="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Book Title"
          onChange={onTitleChanged}
          value={title}
        />
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Book Author"
          onChange={onAuthorChanged}
          value={author}
        />
        {/* <select name="author" value={author} onChange={onAuthorChanged}>
          <option value="Mary">Mary</option>
          <option value="Grey">Grey</option>
        </select> */}
        <Button type="submit" className="add-btn" value="Add book" />
      </form>
    </div>
  );
};

export default Form;
