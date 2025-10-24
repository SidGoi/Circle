"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="p-2 md:p-5 flex items-center justify-center min-h-screen">
        <SignIn
          routing="path"      // use in-app routing
          path="/sign-in"     // this page’s path
          signUpUrl="/sign-up" // redirect here when clicking "Sign up"
          redirectUrl="/"  
              // after sign-in
        />
    </div>
  );
}
