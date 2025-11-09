"use client";

import Image from "next/image";
import LoginUI from "./loginPage";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* LEFT SIDE — FORM */}
      <div className="flex-1 flex items-center justify-center">
        <LoginUI />
      </div>

      {/* RIGHT SIDE — IMAGE */}
      <div className="min-w-[904px] min-h-[856px] items-center justify-center">
        <Image
          src="/deliveryPhoto.png"
          height={856}
          width={904}
          alt="Food Delivery"
        />
      </div>
    </div>
  );
}
