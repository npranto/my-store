import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function ProductMediaGallery({ product }) {
  const [activeImage, setActiveImage] = useState(product?.productMedia[0]);

  if (!product?.productMedia?.length) return null;

  return (
    <div className="md:flex-1" data-component-id="product-media-gallery">
      <div className="w-auto h-[400px] md:h-[400px] rounded-lg mb-4 flex flex-col justify-center">
        <Image
          className="max-w-full max-h-full object-contain mx-auto"
          src={urlForImage(activeImage)}
          alt="Product Main Image"
          width={300}
          height={400}
          priority
        />
      </div>
      <div className="mb-4">
        <div className="flex justify-center gap-2">
          {product.productMedia.map((secImages) => (
            <button
              key={secImages._key}
              className={`h-14 w-14 md:h-20 md:w-20 flex items-center border-2 border-gray-300 hover:border-gray-700 transition-colors p-2 rounded-md cursor-pointer ${
                secImages._key === activeImage._key ? "border-gray-700" : ""
              }`}
              onClick={() => setActiveImage(secImages)}
              onMouseEnter={() => setActiveImage(secImages)}
            >
              <Image
                className="max-w-[100%] max-h-[100%] object-cover mx-auto"
                src={urlForImage(secImages)}
                alt="Product Secondary Image"
                width={60}
                height={60}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
