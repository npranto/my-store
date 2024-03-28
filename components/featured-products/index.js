import React from "react";
import ProductCard from "./product-card";

export default function FeaturedProducts() {
  return (
    <article className="container mx-auto px-4 py-12">
      <h1 className="my-6 text-4xl font-extrabold tracking-tight text-slate-900">
        Featured Products
      </h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </article>
  );
}
