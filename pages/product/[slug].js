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
  return (
    <div className="bg-white py-8 rounded-lg">
      <div className="flex flex-col md:flex-row md:gap-4">
        <ProductMediaGallery product={product} />
        <div className="md:flex-1">
          <ProductBasicInfo product={product} />
          <ProductVariations product={product} />
          <ProductDescription product={product} />
          <ProductActions product={product} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <ProductRatingsReviews product={product} />
      </div>
      <div className="flex flex-col md:flex-row">
        <SimilarProducts product={product} />
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
