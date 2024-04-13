import PageHeader from "@/components/page-header";
import WishlistProducts from "@/components/wishlist-products";
import React from "react";

export default function WishlistPage() {
  return (
    <>
      <PageHeader
        header="Wishlist"
        description="Waiting for the right moment? Your wishlist items are waiting for you, all in one place"
      />
      <WishlistProducts />
    </>
  );
}
