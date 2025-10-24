"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="p-2 md:p-5 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <SignUp
          routing="path"       // in-app routing
          path="/sign-up"      // this page’s path
          signInUrl="/sign-in" // redirect here when clicking "Sign in"
          redirectUrl="/"       // after sign-up
        />
      </div>
    </div>
  );
}
