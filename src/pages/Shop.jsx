import { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import PropTypes from 'prop-types';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );

  if (error)
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-playfair mb-12 text-center text-4xl font-bold text-gray-800">
          Our Collection
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 1 : Math.max(1, value));
  };

  return (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
      <div className="aspect-w-1 aspect-h-1 mb-4 w-full">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain"
        />
      </div>
      <h2 className="font-playfair mb-2 flex-grow text-lg font-semibold">
        {product.title}
      </h2>
      <p className="mb-4 text-gray-600">${product.price.toFixed(2)}</p>
      <div className="mb-4 flex items-center">
        <button
          onClick={handleDecrement}
          className="rounded-l bg-gray-100 px-3 py-1 hover:bg-gray-200"
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleInputChange}
          className="w-16 border-y border-gray-200 py-1 text-center"
        />
        <button
          onClick={handleIncrement}
          className="rounded-r bg-gray-100 px-3 py-1 hover:bg-gray-200"
        >
          +
        </button>
      </div>
      <button
        onClick={() => addToCart(product, quantity)}
        className="rounded bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

Shop.propTypes = {
  addToCart: PropTypes.func,
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Shop;
