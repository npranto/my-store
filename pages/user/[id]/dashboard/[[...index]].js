import React from "react";
import { getAuth } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import PageHeader from "@/components/page-header";
import UserDetails from "./UserDetails";

export default function UserDashboardPage() {
  const { user } = useUser();
  console.log({ user });

  if (!user) return null;

  return (
    <section className="w-full">
      <PageHeader
        header="Dashboard"
        description={`Welcome back, ${user.firstName}`}
      />
      <UserDetails />
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
