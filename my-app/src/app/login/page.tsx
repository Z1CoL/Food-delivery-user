"use client";

import { useState } from "react";
import axios from "axios";
import RegisterPageOne from "../register/registerPageEmail";
import PageTwo from "../register/registerPagePassword";
import Image from "next/image";

export default function RegisterPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [emailValue, setEmailValue] = useState("");

  const handleNextFromEmail = (email: string) => {
    setEmailValue(email);
    setCurrentPage(1);
  };

  const handleNextFromPassword = async (password: string) => {
    const res = await axios.post("http://localhost:5000/api/users/register", {
      email: emailValue,
      password,
    });

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    } else {
      alert(res.data.message || "Registration failed");
    }
  };

  const handleBack = () => {
    setCurrentPage(0);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* LEFT SIDE — FORM */}
      <div className="flex-1 flex items-center justify-center">
        {currentPage === 0 ? (
          <RegisterPageOne handleNext={handleNextFromEmail} />
        ) : (
          <PageTwo
            handleBack={handleBack}
            handleNext={handleNextFromPassword}
          />
        )}
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
