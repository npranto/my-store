import React, { useState } from "react";
import ProductList from "../product-list";
import ShowLessBtn from "../show-less-btn";
import ShowMoreBtn from "../show-more-btn";

export default function FeaturedProducts({ header = "", products = [] }) {
  const [showMore, setShowMore] = useState(false);
  const visibleProducts = showMore ? products : products.slice(0, 4);

  return (
    <section
      className="py-10 relative w-full"
      data-component-id="featured-products"
    >
      <h2 className="font-manrope font-bold text-2xl text-black mb-8">
        {header ? `${header}` : `Featured Products`}
      </h2>
      <ProductList products={visibleProducts} />

      {products.length > 4 && (
        <div className="flex justify-end">
          {showMore ? (
            <ShowLessBtn onClick={() => setShowMore(false)} />
          ) : (
            <ShowMoreBtn onClick={() => setShowMore(true)} />
          )}
        </div>
      )}
    </section>
  );
}
