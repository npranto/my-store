import React from "react";
import ProductCard from "./product-card";

export default function FeaturedProducts({ products = [] }) {
  return (
    <article className="container mx-auto px-4 py-12">
      <h1 className="my-6 text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">
        Featured Products
      </h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center align-items-stretch">
        {products.map((product) => (
          <li key={product._id} className="">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </article>
  );
}
