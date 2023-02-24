import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <ul>
      <li>
        <Link to="/">Book</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </>
);

export default Navbar;
