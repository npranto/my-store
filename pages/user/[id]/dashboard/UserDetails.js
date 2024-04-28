import { useUser } from "@clerk/nextjs";

export default function UserDetails() {
  const { isLoaded, user } = useUser();

  return (
    <div
      className="bg-white overflow-hidden sm:rounded-lg"
      style={{
        boxShadow: `0px 20px 24px -4px rgba(16, 24, 40, 0.08)`,
      }}
    >
      {isLoaded && user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <div className="text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          Loading user data...
        </div>
      )}
    </div>
  );
}
