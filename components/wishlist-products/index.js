import React from "react";
import ProductList from "../product-list";

export default function WishlistProducts({ products = [] }) {
  console.log({ products });

  return (
    <section className="relative w-full">
      <ProductList products={products} />
    </section>
  );
}
