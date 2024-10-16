import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Sudsy Delights
        </Link>
        <div className="space-x-4">
          <NavLink to="/" currentPath={location.pathname}>
            Home
          </NavLink>
          <NavLink to="/shop" currentPath={location.pathname}>
            Shop
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`text-white hover:text-indigo-200 transition-colors duration-200 ${
        isActive ? 'font-bold' : ''
      }`}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Nav;