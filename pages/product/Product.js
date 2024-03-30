import React from "react";
import { urlForImage } from "@/sanity/lib/image";

export default function Product({ product }) {
  console.log(product);

  return (
    <div className="bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 py-8 -ml-8 -mr-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Media Gallery */}
          <div className="md:flex-1 px-4">
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

          <div className="md:flex-1 px-4">
            {/* Product Basic Info */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Sku: {product.sku}
            </p>
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <span className="text-gray-600 font-bold text-3xl dark:text-gray-300">
                  $29.99
                </span>
              </div>
              {product.stockQuantity > 0 ? (
                <div className="badge text-white badge-success">In Stock</div>
              ) : (
                <div className="badge text-white badge-error">Out of Stock</div>
              )}
            </div>

            {/* Product Variations */}
            {product.variations?.length > 1 && (
              <>
                <div className="mb-4 mt-8">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Color:
                  </span>
                  <div className="flex items-center mt-2">
                    <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Size:
                  </span>
                  <div className="flex items-center mt-2">
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      S
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      M
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      L
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      XL
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      XXL
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Product Description */}
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {product.description}
              </p>
            </div>

            {/* Product Actions */}
            <div className="flex mb-4">
              {product.stockQuantity > 0 && (
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
              )}
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
