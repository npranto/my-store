import React from "react";
import { client } from "@/sanity/lib/client";
import ProductBasicInfo from "@/components/product-basic-info";
import ProductVariations from "@/components/product-variations";
import ProductDescription from "@/components/product-description";
import ProductActions from "@/components/product-actions";
import ProductMediaGallery from "@/components/product-media-gallery";
import ProductRatingsReviews from "@/components/product-ratings-reviews";
import SimilarProducts from "@/components/similar-products";

export default function ProductPage({ product }) {
  console.log(product);

  return (
    <div className="bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 py-8 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <ProductMediaGallery product={product} />
          <div className="md:flex-1 px-4">
            <ProductBasicInfo product={product} />
            <ProductVariations product={product} />
            <ProductDescription product={product} />
            <ProductActions product={product} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row -mx-4">
          <ProductRatingsReviews product={product} />
        </div>
        <div className="flex flex-col md:flex-row -mx-4">
          <SimilarProducts product={product} />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { slug = "" } = context.query || {};

  if (typeof slug !== "string" || !slug.length) {
    return {
      notFound: true,
    };
  }

  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;

  try {
    const product = await client.fetch(query);
    if (!product || product === null) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
