"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface RegisterPageOneProps {
  handleNext: (email: string) => void;
}

export default function RegisterPageOne({ handleNext }: RegisterPageOneProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email field is empty");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    setError("");
    handleNext(email);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {/* LEFT SIDE */}
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-start"
        >
          <Image
            src={"/chevron-left.svg"}
            height={16}
            width={16}
            alt=""
            className="w-9 h-9 p-2 border-2 rounded-[5px] items-center justify-center cursor-not-allowed opacity-30"
          />

          {/* Title */}
          <div className="flex flex-col items-start gap-1">
            <span className="font-semibold text-2xl">Create your account</span>
            <span className="font-normal text-[16px] text-[#71717A]">
              Sign up to explore your favorite dishes.
            </span>
          </div>

          {/* Email input */}
          <div className="flex flex-col gap-1 w-[416px]">
            <Input
              type="email"
              value={email}
              onChange={handleChange}
              className={`text-[#71717A] ${
                error ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
              placeholder="Enter your email address"
            />
            {error && (
              <span className="text-red-500 text-sm ml-1">{error}</span>
            )}
          </div>

          {/* Button */}
          <div className="flex items-start gap-3">
            <button
              type="submit"
              className={`flex text-white items-center justify-center gap-2 w-[416px] h-9 rounded-[6px] transition ${
                email && !error
                  ? "bg-black hover:opacity-80"
                  : "bg-black opacity-[0.2] cursor-not-allowed"
              }`}
            >
              Let's Go
            </button>
          </div>

          <span className="flex justify-center items-center gap-3 w-[416px] font-normal text-[16px] text-[#71717A]">
            Already have an account?
            <Link href={"/login"} className="text-blue-500">
              Log in
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
