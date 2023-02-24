const Form = () => (
  <div>
    <h2>Add a New Book</h2>
    <form action="" method="">
      <input type="text" name="text" id="text" placeholder="Book Title" />
      <select>
        <option selected disabled>
          Author
        </option>
        <option value="Mary">Mary</option>
        <option value="Grey">Grey</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Form;
