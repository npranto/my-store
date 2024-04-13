import React from "react";
import ProductCard from "./product-card";

export default function WishlistProducts() {
  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
