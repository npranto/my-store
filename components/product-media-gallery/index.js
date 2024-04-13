import { urlForImage } from "@/sanity/lib/image";
import React from "react";

export default function ProductMediaGallery({ product }) {
  return (
    <div className="md:flex-1">
      <div className="w-full md:w-auto h-auto md:max-h-[460px] md:max-w-[60vw] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
        <img
          className="w-full h-auto rounded-md"
          src={urlForImage(product.productMedia[0])}
          alt="Product Main Image"
        />
      </div>
      <div className="mb-4">
        <div className="grid grid-cols-5 md:grid-cols-5 gap-2">
          {product.productMedia.map((secImages) => (
            <div
              key={secImages._key}
              className="flex items-center border-2 border-gray-300 dark:border-gray-700 hover:border-gray-700 transition-colors p-2 rounded-md"
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={urlForImage(secImages)}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
