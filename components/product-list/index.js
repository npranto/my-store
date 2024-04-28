import React, { useEffect, useRef } from "react";
import ProductCard from "./product-card";

export default function ProductList({ products = [] }) {
  const focusedProductRef = useRef(null);

  if (!products.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, idx) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
