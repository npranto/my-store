import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }) {
  if (
    !product ||
    !product?.name ||
    !product?.productMedia?.length ||
    !product?.price ||
    !product?.slug?.current
  )
    return null;
  return (
    <div className="card h-full max-w-96 bg-white shadow-xl">
      <figure className="px-[10%] pt-[10%]">
        <img
          src={urlForImage(product.productMedia[0])}
          alt="Main product cover"
          className="max-h-36 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-light text-lg line-clamp-3">
          {product.name}
        </h2>
        <p className="font-bold text-2xl">${product.price}</p>
        <div className="card-actions justify-end">
          <Link href={`/product/${product.slug.current}`}>
            <button className="btn w-full sm:max-w-28 btn-primary">Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
