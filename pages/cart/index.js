import PageHeader from "@/components/page-header";
import ShoppingCart from "@/components/shopping-cart";

export default function CartPage() {
  return (
    <section className="w-full" data-page-id="cart">
      <PageHeader
        header="Cart"
        description="Items in your shopping cart. Ready to checkout?"
      />
      <ShoppingCart />
    </section>
  );
}
