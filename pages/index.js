import { client } from "@/sanity/lib/client";
import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import PageHeader from "@/components/page-header";
import SearchBar from "@/components/search-bar";

export default function HomePage(props) {
  console.log({ props });
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between">
        <PageHeader header="Home" />
        <SearchBar />
      </div>
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
