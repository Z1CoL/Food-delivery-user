"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

interface PageTwoProps {
  handleBack: () => void;
  handleNext: (password: string) => void;
}

export default function PageTwo({ handleBack, handleNext }: PageTwoProps) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!password) {
      setError("Нууц үг хоосон байна");
      return;
    }
    if (password.length < 6) {
      setError("Нууц үг хамгийн багадаа 6 тэмдэгттэй байх ёстой");
      return;
    }
    if (password !== confirm) {
      setError("Нууц үг таарахгүй байна");
      return;
    }

    setError("");
    handleNext(password);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-[416px]">
      <Input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Create password"
        className={`text-[#71717A] ${
          error && !password ? "border-red-500" : ""
        }`}
      />
      <Input
        type={showPassword ? "text" : "password"}
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        placeholder="Confirm password"
        className={`text-[#71717A] ${
          error && password !== confirm ? "border-red-500" : ""
        }`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={(e) => setShowPassword(e.target.checked)}
          className="w-4 h-4"
        />
        <span className="text-sm text-[#71717A]">Show password</span>
      </div>

      <div className="flex gap-3 mt-2">
        <button
          type="button"
          onClick={handleBack}
          className="w-1/2 h-9 rounded-[6px] border border-gray-300 text-black"
        >
          Back
        </button>
        <button
          type="submit"
          className={`w-1/2 h-9 rounded-[6px] text-white ${
            !password || !confirm || error || password !== confirm
              ? "bg-black opacity-[0.2] cursor-not-allowed"
              : "bg-black hover:opacity-80"
          }`}
          disabled={!password || !confirm || !!error || password !== confirm}
        >
          Next
        </button>
      </div>
    </form>
  );
}
