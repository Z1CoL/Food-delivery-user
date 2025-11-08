"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

interface RegisterPageTwoProps {
  handleBack: () => void;
  handleNext: (password: string) => void;
}

export default function RegisterPageTwo({
  handleBack,
  handleNext,
}: RegisterPageTwoProps) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || !confirm) {
      setError("Empty field");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    handleNext(password);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-start"
        >
          {/* Back button */}
          <Image
            src="/chevron-left.svg"
            height={16}
            width={16}
            alt="Back"
            onClick={handleBack}
            className="w-9 h-9 p-2 border-2 rounded-[5px] items-center justify-center cursor-pointer hover:bg-gray-100"
          />

          {/* Title */}
          <div className="flex flex-col items-start gap-1">
            <span className="font-semibold text-2xl">Create a password</span>
            <span className="font-normal text-[16px] text-[#71717A]">
              Secure your account with a strong password.
            </span>
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-4 w-[416px]">
            <div className="flex flex-col gap-1">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className={`text-[#71717A] ${
                  error ? "border-red-500 focus-visible:ring-red-500" : ""
                }`}
                placeholder="Create password"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Input
                type={showPassword ? "text" : "password"}
                value={confirm}
                onChange={(e) => {
                  setConfirm(e.target.value);
                  setError("");
                }}
                className={`text-[#71717A] ${
                  error ? "border-red-500 focus-visible:ring-red-500" : ""
                }`}
                placeholder="Confirm password"
              />
              {error && (
                <span className="text-red-500 text-sm ml-1">{error}</span>
              )}
            </div>

            {/* Show Password Checkbox */}
            <label className="flex items-center gap-2 text-sm text-[#71717A] mt-1 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="w-4 h-4 accent-black cursor-pointer"
              />
              Show password
            </label>
          </div>

          {/* Continue Button */}
          <div className="flex items-start gap-3">
            <button
              type="submit"
              disabled={!password || !confirm || !!error}
              className={`flex text-white items-center justify-center gap-2 w-[416px] h-9 rounded-[6px] transition ${
                password && confirm && !error
                  ? "bg-black hover:opacity-80"
                  : "bg-black opacity-[0.2] cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
