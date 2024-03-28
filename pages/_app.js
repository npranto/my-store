import DefaultLayout from "@/components/layouts/default";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
