"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-14 py-8 rounded-xl">
      {/* Logo */}
      <Link href={"/"} className="flex gap-2 items-center justify-center">
        <Image
          src={"/circle-logo.svg"}
          height={1000}
          width={1000}
          alt="Circle Logo"
          className="h-8 w-auto cursor-pointer"
        />
        <h1 className="text-primary text-3xl theme-font">Circle</h1>
      </Link>

      {/* Auth Buttons */}
      <div className="flex gap-3 items-center justify-center">
        <Link
          href={"/sign-up"}
          className="cursor-pointer font-semibold text-primary text-lg"
        >
          Sign up
        </Link>
        <Link href={"/sign-in"}>
          <button className="cursor-pointer font-semibold bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90">
            Sign in
          </button>
        </Link>
      </div>

      {/* Create Button with ShadCN Dialog */}
      <Dialog>
        <DialogTrigger>
          <button className="font-semibold flex items-center justify-center gap-1 bg-primary p-2 md:px-4 md:py-2 text-white rounded-lg cursor-pointer hover:bg-primary/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
            </svg>
            <span className="hidden md:block">Create</span>
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Post</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            {/* Image Upload */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Upload Picture
              </label>
              <Input type="file" accept="image/*" />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>
              <Textarea placeholder="Write something about your post..." />
            </div>

            {/* Publish Button */}
            <button className="bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90">
              Publish
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
