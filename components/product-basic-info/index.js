import React from "react";

export default function ProductBasicInfo({ product }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {product.name}
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        SKU: {product.sku}
      </p>
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <span className="text-green-600 font-bold text-4xl">
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
