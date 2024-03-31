import React from "react";

export default function ProductBasicInfo({ product }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        {product.name}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        Sku: {product.sku}
      </p>
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <span className="text-gray-600 font-bold text-3xl dark:text-gray-300">
            $29.99
          </span>
        </div>
        {product.stockQuantity > 0 ? (
          <div className="badge text-white badge-success">In Stock</div>
        ) : (
          <div className="badge text-white badge-error">Out of Stock</div>
        )}
      </div>
    </>
  );
}
