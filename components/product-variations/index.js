import React from "react";

export default function ProductVariations({ product }) {
  if (!product.variations?.length) return null;
  return (
    <>
      <div className="mb-4 mt-8">
        <span className="font-bold text-gray-700 dark:text-gray-300">
          Color:
        </span>
        <div className="flex items-center mt-2">
          <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
          <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
          <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
          <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
        </div>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700 dark:text-gray-300">
          Size:
        </span>
        <div className="flex items-center mt-2">
          <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
            S
          </button>
          <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
            M
          </button>
          <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
            L
          </button>
          <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
            XL
          </button>
          <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
            XXL
          </button>
        </div>
      </div>
    </>
  );
}
