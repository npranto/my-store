import React from "react";
import ProductCard from "./product-card";

export default function SimilarProducts() {
  return (
    <section class="pt-14 relative w-full">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="font-manrope font-bold text-2xl text-black mb-8 text-center">
          Similar Products
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
