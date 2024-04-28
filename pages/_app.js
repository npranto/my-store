import { ClerkProvider } from "@clerk/nextjs";
import DefaultLayout from "@/components/layouts/default";
import { CartProvider } from "@/context/cart";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <CartProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </CartProvider>
    </ClerkProvider>
  );
}
