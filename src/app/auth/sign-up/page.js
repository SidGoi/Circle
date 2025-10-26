"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen py-5">
      <SignUp
        path="/auth/sign-up"
        routing="path"
        signInUrl="/auth/sign-in"
        redirectUrl="/"
      />
    </div>
  );
}
