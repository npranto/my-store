import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="flex justify-center py-[10vh]" data-page-id="sign-in">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/user/abc/dashboard"
      />
    </section>
  );
}
