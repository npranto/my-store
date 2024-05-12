import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function MenuDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const menuDropdownRef = useRef(null);
  const { isLoaded, user } = useUser();
  const isLoggedIn = isLoaded && !!user;

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    function handleClickOutsideMenuDropdown(event) {
      if (
        menuDropdownRef.current &&
        !menuDropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutsideMenuDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenuDropdown);
    };
  }, [menuDropdownRef]);

  return (
    <div
      className="relative"
      ref={menuDropdownRef}
      data-component-id="header/menu-dropdown"
    >
      <button
        className="flex items-center overflow-hidden rounded-md border bg-white p-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        onClick={toggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
        >
          <div className="p-2">
            {[
              { href: "/", label: "Home" },
              { href: "/store/kevin-s-hut", label: "Store Page" },
              { href: "/cart", label: "Cart" },
              { href: "/order-confirmation", label: "Order Confirmation" },
              { href: "/order-summary", label: "Order Summary" },
              {
                href: "/product/apple-6-6-2m-usb-type-c-to-lightning-charging-cable-white",
                label: "Product Page",
              },
              { href: "/wishlist", label: "Wishlist" },
              { href: "/profile", label: "Profile" },
              ...(isLoggedIn
                ? [{ href: "/user/abc/dashboard", label: "User Dashboard" }]
                : [
                    { href: "/sign-in", label: "Sign In" },
                    { href: "/sign-up", label: "Sign Up" },
                  ]),
              { href: "/settings", label: "Settings" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => closeDropdown()}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
