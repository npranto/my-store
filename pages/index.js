import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";
import { client } from "@/sanity/lib/client";

export default function HomePage(props) {
  console.log({ props });
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
