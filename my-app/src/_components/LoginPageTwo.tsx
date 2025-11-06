"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPageTwo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: form */}
        <div className="p-10 md:p-16 flex flex-col justify-center">
          <button
            aria-hidden
            className="mb-6 inline-flex items-center justify-center w-9 h-9 rounded-full border text-gray-600"
            onClick={() => window.history.back()}
            title="Back"
          >
            ‹
          </button>

          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Create a strong password
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Create a strong password with letters, numbers.
          </p>

          <form
            className="space-y-4 w-full max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            <div className="flex items-center gap-3">
              <label className="inline-flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={show}
                  onChange={(e) => setShow(e.target.checked)}
                  className="mr-2"
                />
                Show password
              </label>
            </div>

            <Button className="w-full" disabled={loading}>
              {loading ? "Loading..." : "Let's Go"}
            </Button>

            <p className="text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <a href="#" className="text-indigo-600">
                Log in
              </a>
            </p>
          </form>
        </div>

        {/* Right: image */}
        <div className="hidden md:block relative">
          <div className="absolute inset-6 rounded-xl overflow-hidden">
            <Image src="/images/hero.png" alt="Delivery rider on bike" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
