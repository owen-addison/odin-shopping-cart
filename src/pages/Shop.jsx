import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 1 : Math.max(1, value));
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <div className="flex items-center mb-4">
        <button onClick={handleDecrement} className="bg-gray-200 px-2 py-1 rounded-l">-</button>
        <input 
          type="number" 
          min="1" 
          value={quantity} 
          onChange={handleInputChange}
          className="w-16 text-center border-t border-b"
        />
        <button onClick={handleIncrement} className="bg-gray-200 px-2 py-1 rounded-r">+</button>
      </div>
      <button 
        onClick={() => addToCart(product, quantity)} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};

Shop.propTypes = {
  addToCart: PropTypes.func.isRequired,
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