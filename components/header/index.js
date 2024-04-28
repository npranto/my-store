import Link from "next/link";
import React from "react";
import MenuDropdown from "./menu-dropdown";
import CartBadge from "../cart-badge";
import Image from "next/image";

export default function Header({ className = "" }) {
  return (
    <header className={`bg-white ${className}`}>
      <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <Link href={"/"} className="btn text-3xl text-gray-400 font-bold">
            <div className="flex gap-2 items-center">
              <Image
                src="/img/mystore.svg"
                alt="MyStore"
                width={50}
                height={50}
              />
              <span className="hidden sm:block">MyStore</span>
            </div>
          </Link>
        </div>

        <div className="md:flex md:items-center md:gap-12">
          <nav className="flex items-center gap-4">
            <div className="block">
              <Link href={"/cart"}>
                <CartBadge count={5} />
              </Link>
            </div>
            <div className="block">
              <MenuDropdown />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
