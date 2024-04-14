import React from "react";

export default function AddToCartBtn({ className = "" }) {
  return (
    <button
      className={`${className} bg-green-700 text-white rounded-full font-bold hover:bg-green-600 py-3 px-7 text-sm leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-green-200`}
    >
      Add to Cart
    </button>
  );
}
