// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// export default function RegisterPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         console.log("User created:", data);
//         alert("Амжилттай бүртгэгдлээ!");
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Алдаа гарлаа");
//     }
//   };

//   return (
//     <div className="flex w-[1440px] bg-white items-center justify-center">
//       {/* LEFT SIDE - form */}
//       <div className="flex flex-col w-[416px]">
//         <h2 className="text-2xl font-semibold mb-4">Create your account</h2>
//         <p className="text-gray-500 mb-6">
//           Sign up to explore your favorite dishes.
//         </p>
//         <div className="flex flex-col gap-3 w-full">
//           <Input
//             placeholder="Enter your email address"
//             className="h-11 text-base"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             type="password"
//             placeholder="Enter your password"
//             className="h-11 text-base"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             className="bg-gray-800 text-white hover:bg-gray-700"
//             onClick={handleRegister}
//           >
//             Let's Go
//           </Button>
//         </div>
//         <p className="text-sm text-gray-500 mt-4 flex justify-center items-center">
//           Already have an account?{" "}
//           <a href="#" className="text-blue-600 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>

//       {/* RIGHT SIDE - image */}
//       <div className="relative h-full pl-12">
//         <Image src="/delivery.png" alt="" width={856} height={904} />
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("✅ Нэвтрэлт амжилттай");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex w-[1440px] bg-white items-center justify-center">
      {/* LEFT SIDE - form */}
      <div className="flex flex-col w-[416px]">
        <h2 className="text-2xl font-semibold mb-4">Create your account</h2>
        <p className="text-gray-500 mb-6">
          Sign up to explore your favorite dishes.
        </p>
        <div className="flex flex-col gap-3 w-full">
          <Input
            placeholder="Enter your email address"
            className="h-11 text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            className="h-11 text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="bg-gray-800 text-white hover:bg-gray-700"
            onClick={handleLogin}
          >
            Let's Go
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-4 flex justify-center items-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {/* RIGHT SIDE - image */}
      <div className="relative h-full pl-12">
        <Image src="/delivery.png" alt="" width={856} height={904} />
      </div>
    </div>
  );
}
