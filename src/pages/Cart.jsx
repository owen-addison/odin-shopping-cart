import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <div className="mx-auto w-full max-w-5xl">
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between rounded border p-4 shadow-sm"
                >
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
