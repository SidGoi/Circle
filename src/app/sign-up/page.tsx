"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="p-2 md:p-5 flex items-center justify-center">
      <SignUp routing="path" signInUrl="/sign-in" redirectUrl="/" />
    </div>
  );
}
