import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import PropTypes from 'prop-types';

const Nav = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left logo space */}
          <div className="w-32">
            <Link
              to="/"
              className="font-playfair text-xl font-bold text-gray-800"
            >
              Things
            </Link>
          </div>

          {/* Center nav links */}
          <div className="flex space-x-8">
            <NavLink to="/" currentPath={location.pathname}>
              Home
            </NavLink>
            <NavLink to="/shop" currentPath={location.pathname}>
              Shop
            </NavLink>
          </div>

          {/* Right cart link */}
          <div className="flex w-32 justify-end">
            <Link
              to="/cart"
              className="flex items-center space-x-1 text-gray-600 transition-colors duration-200 hover:text-gray-800"
            >
              <span>Cart ({getTotalItems()})</span>
            </Link>
          </div>
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
      className={`text-gray-600 transition-colors duration-200 hover:text-gray-800 ${
        isActive ? 'font-semibold text-gray-800' : ''
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
};

export default Nav;
