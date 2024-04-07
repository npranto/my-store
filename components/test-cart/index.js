import React from "react";
import { CartProvider, useCart } from "../../context/cart";

const Product = ({ id, name, price }) => {
  const { addItemToCart, removeItemFromCart, isItemInCart } = useCart();

  const handleAddToCart = () => {
    addItemToCart({ id, name, price });
  };

  const handleRemoveFromCart = () => {
    removeItemFromCart(id);
  };

  return (
    <div className="border border-gray-300 p-4 m-2">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">Price: ${price}</p>
      {isItemInCart(id) ? (
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

const Cart = () => {
  const { cart, clearCart, getCartTotal } = useCart();

  return (
    <div className="border border-gray-300 p-4 m-2">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="text-gray-700">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p className="text-gray-800 font-semibold mt-4">
        Total: ${getCartTotal()}
      </p>
      <button
        onClick={clearCart}
        className="bg-gray-500 text-white px-4 py-2 mt-4 rounded"
      >
        Clear Cart
      </button>
    </div>
  );
};

const TestCart = () => {
  return (
    <CartProvider>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Shopping App</h1>
        <div className="grid grid-cols-3 gap-4">
          <Product id={1} name="Product 1" price={10} />
          <Product id={2} name="Product 2" price={20} />
          <Product id={3} name="Product 3" price={30} />
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default TestCart;
