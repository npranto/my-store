import React from "react";
import { client } from "@/sanity/lib/client";
import WishlistProducts from "@/components/wishlist-products";
import PageHeader from "@/components/page-header";

export default function WishlistPage({ products = [] }) {
  return (
    <section className="w-full" data-page-id="wishlist">
      <PageHeader
        header="Wishlist"
        description="Waiting for the right moment? Your wishlist items are waiting for you, all in one place"
      />
      <WishlistProducts products={products} />
    </section>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  return {
    props: { products },
  };
};
