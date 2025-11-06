// "use client";

// import { Input } from "@/components/ui/input";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export default function RegisterPageOne() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   // email шалгах regex
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setEmail(value);

//     if (value === "") {
//       setError("И-мэйл хоосон байна");
//     } else if (!emailRegex.test(value)) {
//       setError("И-мэйл буруу байна");
//     } else {
//       setError("");
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (error || !email) return;
//     alert(`И-мэйл зөв байна: ${email}`);
//   };

//   return (
//     <div className="w-[1440px] h-[1024px] flex">
//       <div className="flex items-center justify-center w-1/2">
//         <div className="flex flex-col gap-6  items-start ">
//           <Image
//             src={"/chevron-left.svg"}
//             height={16}
//             width={16}
//             alt=""
//             className="w-9 h-9 p-2 border-2 rounded-[5px] items-center justify-center"
//           />

//           <div className="flex flex-col items-start gap-1">
//             <span className="font-semibold border-spacing-[-0.6px] text-2xl ">
//               Create your account
//             </span>
//             <span className="font-normal text-[16px] text-[#71717A]">
//               Sign up to explore your favorite dishes.
//             </span>
//           </div>

//           <Input
//             type="email"
//             value={email}
//             onChange={handleChange}
//             className="flex flex-col w-[] items-start gap-4 w-[416px] text-[#71717A]"
//             placeholder="Enter your email address"
//           ></Input>

//           <div className="flex items-start gap-3">
//             <button className="flex  text-white items-center opacity-[0.2] bg-black justify-center gap-2 w-[416px] h-9 rounded-[6px]">
//               Let's Go
//             </button>
//           </div>

//           <span className="flex justify-center items-center gap-3 w-[416px] font-normal text-[16px] text-[#71717A]">
//             Already have an account?
//             <Link href={"/"} className="text-blue-500">
//               Log in
//             </Link>
//           </span>
//         </div>
//       </div>

//       <div className="">
//         <Image src={"/deliveryPhoto.png"} height={856} width={904} alt="" />
//       </div>
//     </div>
//   );
// }

"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPageOne() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // email шалгах regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setError("И-мэйл хоосон байна");
    } else if (!emailRegex.test(value)) {
      setError("И-мэйл буруу байна");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (error || !email) return;
  };

  return (
    <div className="w-[1440px] h-[1024px] flex">
      {/* LEFT SIDE */}
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-start"
        >
          <Image
            src={"/chevron-left.svg"}
            height={16}
            width={16}
            alt=""
            className="w-9 h-9 p-2 border-2 rounded-[5px] items-center justify-center"
          />

          <div className="flex flex-col items-start gap-1">
            <span className="font-semibold border-spacing-[-0.6px] text-2xl ">
              Create your account
            </span>
            <span className="font-normal text-[16px] text-[#71717A]">
              Sign up to explore your favorite dishes.
            </span>
          </div>

          <div className="flex flex-col gap-1 w-[416px]">
            <Input
              type="email"
              value={email}
              onChange={handleChange}
              className={`flex flex-col items-start gap-4 text-[#71717A] ${
                error ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
              placeholder="Enter your email address"
            />
            {error && (
              <span className="text-red-500 text-sm ml-1">{error}</span>
            )}
          </div>

          <div className="flex items-start gap-3">
            <button
              type="submit"
              disabled={!!error || !email}
              className={`flex items-center justify-center gap-2 w-[416px] h-9 rounded-[6px] text-white transition ${
                error || !email
                  ? "bg-black opacity-[0.2] cursor-not-allowed"
                  : "bg-black hover:opacity-80"
              }`}
            >
              Let's Go
            </button>
          </div>

          <span className="flex justify-center items-center gap-3 w-[416px] font-normal text-[16px] text-[#71717A]">
            Already have an account?
            <Link href={"/"} className="text-blue-500">
              Log in
            </Link>
          </span>
        </form>
      </div>


    </div>
  );
}
