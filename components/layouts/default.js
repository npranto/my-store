import Head from "next/head";
import React from "react";
import NavBar from "../navbar";
import Footer from "../footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <title>MyStore</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-2 md:p-8 ${inter.className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
