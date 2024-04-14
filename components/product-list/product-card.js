import { urlForImage } from "@/sanity/lib/image";
import React from "react";

export default function ProductCard({ product = {} }) {
  return (
    <a
      href="#/"
      className="w-full sm:mr-0 group cursor-pointer lg:mx-auto transition-all duration-500"
    >
      <div className="h-52 p-4 w-full rounded-lg overflow-hidden border shadow-md border-gray-100 group-hover:scale-105 transition-all ease-in-out flex items-center">
        <img
          src={urlForImage(product.productMedia[0])}
          alt="face cream image"
          className="max-h-[100%] max-w-[100%] object-cover mx-auto"
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
    </a>
  );
}
