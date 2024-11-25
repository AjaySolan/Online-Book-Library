import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Online Library</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" activeclassname="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/browse" activeclassname="active">Browse Books</NavLink>
        </li>
        <li>
          <NavLink to="/add" activeclassname="active">Add Book</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
