"use client";

import { Input } from "@/components/ui/input";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginUI() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // LOGIN FUNCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.user.role);

        if (res.data.user.role === "ADMIN") {
          router.push("/AdminHomePage");
        } else {
          router.push("/UserHomePage");
        }
      } else {
        setError(res.data.message || "nevterhed aldaa garla");
      }
    } catch (err: any) {
      console.log("alda", { err });
      const message = err?.response?.data?.message || "error";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
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
            <span className="font-semibold text-2xl">Log in</span>
            <span className="font-normal text-[16px] text-[#71717A]">
              Log in to enjoy your favorite dishes.
            </span>
          </div>

          {/* Email + Password */}
          <div className="flex flex-col gap-3 w-[416px]">
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className={`text-[#71717A] ${
                error ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
              placeholder="Enter your email address"
            />

            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className={`text-[#71717A] ${
                error ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
              placeholder="Password"
            />

            {/* Алдааны мессеж */}
            {error && (
              <span className="text-red-500 text-sm ml-1">{error}</span>
            )}
          </div>

          {/* Forgot password */}
          <button
            type="button"
            className="underline text-sm text-gray-500 hover:text-black transition"
          >
            Forgot password?
          </button>

          {/* Button */}
          <div className="flex items-start gap-3">
            <button
              type="submit"
              disabled={loading}
              className={`flex text-white items-center justify-center gap-2 w-[416px] h-9 rounded-[6px] transition ${
                email && password && !loading
                  ? "bg-black hover:opacity-80"
                  : "bg-black opacity-[0.2] cursor-not-allowed"
              }`}
            >
              {loading ? "Logging in..." : "Let's Go"}
            </button>
          </div>

          {/* Signup Link */}
          <span className="flex justify-center items-center gap-3 w-[416px] font-normal text-[16px] text-[#71717A]">
            Don't have an account?
            <Link href={"/register"} className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
