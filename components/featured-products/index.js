import React from "react";
import ProductCard from "./product-card";

export default function FeaturedProducts() {
  return (
    <section className="pt-14 relative w-full">
      <h2 className="font-manrope font-bold text-2xl text-black mb-8">
        Featured Products
      </h2>
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
