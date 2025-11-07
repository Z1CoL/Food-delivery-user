"use client";

import { useState } from "react";
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

  const handleBack = () => {
    setCurrentPage(0);
  };

  const handleNextFromPassword = (password: string) => {
    console.log("Registered:", { emailValue, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {currentPage === 0 && (
        <RegisterPageOne handleNext={handleNextFromEmail} />
      )}
      {currentPage === 1 && (
        <PageTwo handleBack={handleBack} handleNext={handleNextFromPassword} />
      )}
      <div className="items-center justify-center">
        {" "}
        <Image
          src={"/deliveryPhoto.png"}
          height={856}
          width={904}
          alt=""
          className="min-w-[904px] min-h-[856px] "
        />{" "}
      </div>
    </div>
  );
}
