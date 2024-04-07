import DefaultLayout from "@/components/layouts/default";
import { CartProvider } from "@/context/cart";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </CartProvider>
  );
}
