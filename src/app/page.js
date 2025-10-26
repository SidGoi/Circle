"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Post from "../components/Post";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <header className="flex items-center justify-between px-10 py-5 md:px-16 lg:px-24 sticky top-0 bg-white z-10">
        <h1 className="text-3xl pacifico text-primary flex items-center justify-center gap-2">
          <Image
            src={"/circle.svg"}
            height={1000}
            width={1000}
            className="h-7 w-auto"
          />
          Circle
        </h1>
        <SignedIn>
          <div className="flex items-center justify-center gap-5">
            <button className="flex items-center justify-center gap-1 p-2 md:px-4 md:py-2 rounded-sm bg-primary cursor-pointer text-white font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
              <span className="hidden md:block">Create</span>
            </button>
            <div className="scale-130 flex items-center justify-center cursor-pointer">
              <UserButton />
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="hidden md:flex items-center justify-center gap-3">
            <Link href={"/auth/sign-in"}>
              <button className="cursor-pointer font-semibold">Sign in</button>
            </Link>
            <Link href={"/auth/sign-up"}>
              <button className="px-4 py-2 rounded-sm bg-primary cursor-pointer text-white font-semibold">
                Sign up
              </button>
            </Link>
          </div>
          <Link href={"/auth/sign-up"} className="md:hidden">
            <button className="flex items-center justify-center gap-1 px-4 py-2 rounded-sm bg-primary cursor-pointer text-white font-semibold">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" />
              </svg>
            </button>
          </Link>
        </SignedOut>
      </header>
      <main>
        <SignedOut>
          <div className="flex h-[80vh] md:h-auto flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4 md:px-16 lg:px-24 gap-5">
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-4 md:w-[50%]">
              <h3 className="text-2xl md:text-2xl font-semibold text-[#222] relative">
                Welcome to Circle!
                <span className="absolute w-full h-1.5 md:h-2.5 bg-primary left-0 bottom-1 opacity-50 -rotate-1 rounded-lg -z-1" />
              </h3>
              <h1 className="text-3xl text-center md:text-left md:text-5xl text-[#222] mb-3">
                Share your moments, connect with friends,{" "}
                <b>and build your story through images and words.</b>
              </h1>
              <Link href={"/auth/sign-up"}>
                <button className="flex items-center justify-center gap-1 px-4 py-2 rounded-sm bg-primary cursor-pointer text-white font-semibold">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" />
                  </svg>
                </button>
              </Link>
            </div>
            <Image
              src={"/landing.png"}
              height={1000}
              width={1000}
              className="w-100 h-100 md:w-140 md:h-120 object-contain"
            />
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex gap-5 flex-wrap m-auto items-center justify-center px-5 md:px-16 lg:px-24 md:py-8">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </SignedIn>
      </main>
    </>
  );
};

export default page;
