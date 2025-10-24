"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="p-2 md:p-5 flex items-center justify-center">
      <SignIn routing="path" signUpUrl="/sign-up" redirectUrl="/" />
    </div>
  );
}
