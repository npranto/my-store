import { client } from "@/sanity/lib/client";
import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";

export default function HomePage(props) {
  return (
    <>
      <Hero />
      <FeaturedProducts products={props.products} />
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
