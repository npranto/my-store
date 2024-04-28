import React from "react";
import { getAuth } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import PageHeader from "@/components/page-header";

export default function UserDashboardPage() {
  const { user } = useUser();

  if (!user) return null;

  console.log({ user });

  return (
    <section className="w-full">
      <PageHeader
        header="Dashboard"
        description={`Welcome back, ${user.firstName}`}
      />
      <pre>{JSON.stringify(user, null, 2)}</pre>
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
