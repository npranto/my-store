import { client } from "@/sanity/lib/client";
import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";
import TestCart from "@/components/test-cart";

export default function HomePage(props) {
  console.log({ props });
  return (
    <>
      <Hero />
      <FeaturedProducts products={props.products} />
      {/* <TestCart /> */}
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  return {
    props: { products },
  };
};
