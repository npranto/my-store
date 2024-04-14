import React from "react";
import ProductList from "../product-list";

export default function FeaturedProducts({ products = [] }) {
  return (
    <section className="py-10 relative w-full">
      <h2 className="font-manrope font-bold text-2xl text-black mb-8">
        Featured Products
      </h2>
      <ProductList products={products} />
    </section>
  );
}
