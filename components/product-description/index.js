import React from "react";

export default function ProductDescription({ product }) {
  return (
    <div className="mb-4" data-component-id="product-description">
      <span className="font-bold text-gray-700">Description:</span>
      <p className="text-gray-600 text-sm mt-2 line-clamp-6">
        {product.description}
      </p>
    </div>
  );
}
