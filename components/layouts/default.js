import Head from "next/head";
import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <title>MyStore</title>
      </Head>
      <Header className="bg-white mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" />
      <main
        className={`flex min-h-screen flex-col justify-between bg-white mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ${inter.className}`}
      >
        {children}
      </main>
      <Footer className="bg-white mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" />
    </>
  );
}
