import { client } from "@/sanity/lib/client";
import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import PageHeader from "@/components/page-header";
import StoreStats from "@/components/store-stats";
import SocialLinks from "@/components/social-links";

export default function StorePage(props) {
  console.log({ props });
  const { name = "", tagline = "", products = [] } = props.store || {};
  return (
    <section data-page-id="store">
      <div className="flex flex-col sm:flex-row justify-between">
        <PageHeader
          header={name ? `Store: ${name}` : " Store: Anonymous"}
          description={tagline}
          className="grow"
        />
        <SocialLinks />
      </div>
      <Hero />
      <FeaturedProducts products={products} />
      <StoreStats />
    </section>
  );
}

export const getServerSideProps = async (context) => {
  const { slug = "" } = context.query || {};

  if (typeof slug !== "string" || !slug.length) {
    return {
      notFound: true,
    };
  }

  const storeQuery = `*[_type == "store" && slug.current == "${slug}"]{
    name,
    _id,
    seller,
    tagline,
    products[]{
      _ref
    }
  }`;

  const store = (await client.fetch(storeQuery))[0];

  if (!store || store === null || typeof store !== "object") {
    return {
      notFound: true,
    };
  }

  const products = await Promise.all(
    store.products.map(async (productRef) => {
      const fullProduct = await client.fetch(`*[_id == "${productRef._ref}"]`);
      return fullProduct[0];
    })
  );

  if (!products || !Array.isArray(products)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      store: {
        ...store,
        products,
      },
    },
  };
};
