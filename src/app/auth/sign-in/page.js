"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen py-5">
      <SignIn
        path="/auth/sign-in"
        routing="path"
        signUpUrl="/auth/sign-up"
        redirectUrl="/"
      />
    </div>
  );
}
