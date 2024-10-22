import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <div className="w-full max-w-5xl mx-auto">
            <ul className="space-y-4">
              {cart.map(item => (
                <li key={item.id} className="flex items-center justify-between p-4 border rounded shadow-sm">
                  <div className="flex-1">
                    <h2 className="font-bold">{item.title}</h2>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">
                    Price: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;