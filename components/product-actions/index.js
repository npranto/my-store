import React from "react";

export default function ProductActions({ product }) {
  return (
    <div className="flex mb-4">
      {product.stockQuantity > 0 && (
        <div className="w-1/2 px-2">
          <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
            Add to Cart
          </button>
        </div>
      )}
      <div className="w-1/2 px-2">
        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
