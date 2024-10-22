import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const {
    cart,
    getCartTotal,
    removeFromCart,
    updateQuantity,
    emptyCart,
    submitOrder,
    orderStatus,
  } = useCart();

  const handleQuantityChange = (item, newQuantity) => {
    const quantity = parseInt(newQuantity, 10);
    if (!isNaN(quantity)) {
      updateQuantity(item.id, quantity);
    }
  };

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">Your Cart</h1>

        {/* Order Status Message */}
        {orderStatus === 'submitted' && (
          <div className="mb-8 rounded-lg bg-green-100 p-4 text-center text-green-800">
            <p className="font-medium">
              Oops... not actually a real shop, but thanks for window shopping!
              😉
            </p>
            <p className="mt-2 text-sm">
              Your cart has been cleared - feel free to browse some more!
            </p>
          </div>
        )}

        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <div className="mx-auto w-full max-w-5xl">
            <ul className="mb-8 space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded border p-4 shadow-sm"
                >
                  <div className="min-w-[200px] flex-1">
                    <h2 className="font-bold">{item.title}</h2>
                    <div className="mt-2 flex items-center gap-2">
                      <label
                        htmlFor={`quantity-${item.id}`}
                        className="text-sm"
                      >
                        Quantity:
                      </label>
                      <input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item, e.target.value)
                        }
                        className="w-20 rounded border px-2 py-1"
                      />
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 rounded bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="border-t pt-4">
              <div className="mb-4 flex items-center justify-between">
                <button
                  onClick={emptyCart}
                  className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                  Empty Cart
                </button>
                <button
                  onClick={submitOrder}
                  className="rounded bg-green-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-600"
                >
                  Checkout
                </button>
              </div>
              <div className="flex items-center justify-between text-xl">
                <span className="font-bold">Cart Total:</span>
                <span className="font-bold">${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
