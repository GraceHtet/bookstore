import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <>
    <nav>
      <div className="logo-menu">
        <Link to="/" className="pg-title link">
          Bookstore CMS
        </Link>
        <ul>
          <li>
            <NavLink className="nav-link link" to="/">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link link" to="/categories">
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="user">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-user"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    </nav>
  </>
);

export default Navbar;
