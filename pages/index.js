import { client } from "@/sanity/lib/client";
import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import PageHeader from "@/components/page-header";

export default function HomePage(props) {
  console.log({ props });
  return (
    <>
      <PageHeader header="Home" />
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
