import React from "react";
import AddToCartBtn from "../add-to-cart-btn";
import AddToWishlistBtn from "../add-to-wishlist-btn";
import QuantityPicker from "../quantity-picker";

export default function ProductActions({ product }) {
  return (
    <div className="flex flex-col gap-2">
      {product.stockQuantity > 0 && (
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <QuantityPicker />
          <AddToCartBtn className="w-full" />
        </div>
      )}
      <div className="w-full">
        <AddToWishlistBtn />
      </div>
    </div>
  );
}
