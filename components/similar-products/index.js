import React from "react";
import ProductList from "../product-list";

export default function SimilarProducts({ products = [] }) {
  return (
    <section
      className="pt-14 relative w-full"
      data-component-id="similar-products"
    >
      <h2 className="font-manrope font-bold text-2xl text-black mb-8 text-center">
        Similar Products
      </h2>
      <ProductList products={products} />
    </section>
  );
}
