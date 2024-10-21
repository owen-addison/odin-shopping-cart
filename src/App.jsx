import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Nav from './components/Nav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <footer className="bg-gray-200 text-center py-4">
            © 2024 Things. All rights reserved.
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;