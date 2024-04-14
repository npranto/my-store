import { urlForImage } from "@/sanity/lib/image";
import React from "react";

export default function ProductMediaGallery({ product }) {
  return (
    <div className="md:flex-1">
      <div className="w-full h-auto md:h-[450px] md:w-auto md:max-w-[60vw] rounded-lg mb-4">
        <img
          className="max-w-[100%] max-h-[100%] object-cover mx-auto"
          src={urlForImage(product.productMedia[0])}
          alt="Product Main Image"
        />
      </div>
      <div className="mb-4">
        <div className="flex justify-center gap-2">
          {product.productMedia.map((secImages) => (
            <div
              key={secImages._key}
              className="h-20 w-20 flex items-center border-2 border-gray-300 hover:border-gray-700 transition-colors p-2 rounded-md"
            >
              <img
                className="max-w-[100%] max-h-[100%] object-cover mx-auto"
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
