import { useState } from 'react';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Author');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);

  return (
    <div>
      <h2>Add a New Book</h2>
      <form action="" method="" onSubmit={(e) => e.preventDefault}>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Book Title"
          onChange={onTitleChanged}
          value={title}
        />
        <select name="author" value={author} onChange={onAuthorChanged}>
          <option value="Mary">Mary</option>
          <option value="Grey">Grey</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
