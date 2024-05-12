import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product = {} }) {
  return (
    <Link
      href={`/product/${product?.slug?.current || ""}`}
      className="w-full sm:mr-0 group cursor-pointer lg:mx-auto transition-all duration-500 border shadow-md border-gray-100 p-4 rounded-lg"
      data-component-id="product-list/product-card"
    >
      <div className="h-52 w-52 overflow-hidden group-hover:scale-105 transition-all duration-500 ease-in-out flex items-center mx-auto">
        <Image
          className="max-w-full max-h-full object-contain mx-auto"
          src={urlForImage(product.productMedia[0])}
          alt="face cream image"
          width={208}
          height={208}
          priority
        />
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h6 className="text-sm line-clamp-2 transition-all duration-500 text-gray-500">
            {product.name}
          </h6>
        </div>
        <p className="mt-1 font-bold text-xl leading-8"> ${product.price} </p>
      </div>
    </Link>
  );
}
