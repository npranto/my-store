import React from "react";

export default function ProductVariations({ product }) {
  if (!product?.variations?.length) return null;
  return (
    <div data-component-id="product-variations">
      <div className="mb-4 mt-8">
        <span className="font-bold text-gray-700">Color:</span>
        <div className="flex items-center mt-2">
          <button className="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
          <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
          <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
          <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
        </div>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700">Size:</span>
        <div className="flex items-center mt-2">
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
            S
          </button>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
            M
          </button>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
            L
          </button>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
            XL
          </button>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
            XXL
          </button>
        </div>
      </div>
    </div>
  );
}
