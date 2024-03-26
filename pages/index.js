import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-2 md:p-8 ${inter.className}`}
    >
      <NavBar />
      <Hero />
    </main>
  );
}
