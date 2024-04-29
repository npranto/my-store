import React, { useState, useEffect } from "react";
import { getAuth } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import PageHeader from "@/components/page-header";
import SideMenu from "@/components/dashboard-side-menu";

const DEFAULT_MENU = [
  {
    name: "Ongoing Orders",
    active: true,
  },
  {
    name: "Purchase History",
    active: false,
  },
  {
    name: "Returns",
    active: false,
  },
  {
    name: "Billing Info",
    active: false,
  },
  {
    name: "Payment Info",
    active: false,
  },
  {
    name: "Statements",
    active: false,
  },
  {
    name: "Notifications",
    active: false,
  },
  {
    name: "Account",
    active: false,
  },
  {
    name: "Settings",
    active: false,
  },
];

export default function UserDashboardPage() {
  const { user } = useUser();
  const [menuItems, setMenuItems] = useState(DEFAULT_MENU);
  const activeMenuItem = menuItems.find((item) => item.active);

  useEffect(() => {
    console.log({ user });
  }, [user]);

  const updateMenu = (itemName) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        active: item.name === itemName,
      }))
    );
  };

  if (!user) return null;

  return (
    <section className="w-full">
      <PageHeader
        header="Dashboard"
        description={`Welcome back, ${user.firstName}`}
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 h-auto lg:h-screen">
        <div className="h-auto rounded-lg lg:col-span-1">
          <SideMenu menu={menuItems} onItemClick={updateMenu} />
        </div>
        <div className="h-auto rounded-lg bg-gray-100 lg:col-span-3 px-4 py-4">
          <h2 className="font-manrope font-bold text-2xl text-black mb-8">
            {activeMenuItem.name}
          </h2>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(ctx) {
  const { userId } = getAuth(ctx.req);

  if (!userId) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
