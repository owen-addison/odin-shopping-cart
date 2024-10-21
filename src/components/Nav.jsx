import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import PropTypes from 'prop-types';

const Nav = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-indigo-600 p-4 w-full">
      <div className="flex justify-between items-center w-full max-w-[2000px] mx-auto">
        <Link to="/" className="text-white text-2xl font-bold">
          Things
        </Link>
        <div className="space-x-4 flex items-center">
          <NavLink to="/" currentPath={location.pathname}>
            Home
          </NavLink>
          <NavLink to="/shop" currentPath={location.pathname}>
            Shop
          </NavLink>
          <Link to="/cart" className="text-white hover:text-indigo-200 transition-colors duration-200">
            Cart ({getTotalItems()})
          </Link>
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