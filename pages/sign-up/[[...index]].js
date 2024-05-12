import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="flex justify-center py-[10vh]" data-page-id="sign-up">
      <SignUp
        path="/sign-up"
        signInUrl="/sign-in"
        forceRedirectUrl="/user/abc/dashboard"
      />
    </section>
  );
}
