"use client";

import Image from "next/image";
import { useState } from "react";
import RegisterPageOne from "../register/registerPageEmail";
import RegisterPageTwo from "@/_components/registerPageTwo";

export default function RegisterPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNextFromEmail = (emailValue: string) => {
    setEmail(emailValue);
    setCurrentPage(1);
  };

  const handleNextFromPassword = (passwordValue: string) => {
    setPassword(passwordValue);
    alert(
      `Registration complete!\nEmail: ${email}\nPassword: ${passwordValue}`
    );
    // Энд backend руу POST request хийж болно
  };

  const handleBack = () => {
    setCurrentPage(0);
  };

  return (
    <div className="flex w-[1440px] h-[1024px]">
      {/* LEFT SIDE - Registration Forms */}
      <div className="flex items-center justify-center w-1/2">
        <div className="flex items-center justify-center w-1/2">
          {currentPage === 0 && (null
            // <RegisterPageOne handleNext={handleNextFromEmail} />
          )}
          {currentPage === 1 && (
            <RegisterPageTwo
              // handleBack={handleBack}
              // handleNext={handleNextFromPassword}
            />
          )}
        </div>
      </div>

      {/* RIGHT SIDE - Image */}
      <div className="w-1/2 flex items-center justify-center">
        <Image src={"/deliveryPhoto.png"} height={856} width={904} alt="" />
      </div>
    </div>
  );
}
