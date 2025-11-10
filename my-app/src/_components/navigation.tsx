"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ButtonComponent from "./Button";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const activeButton = pathname.includes("/AdminHomePage/orders")
    ? "orders"
    : "food";

  return (
    <div className="flex w-[205px] h-[1024px] m-9 flex-col gap-10">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" height={29} width={36} alt="logo" />
        <div className="flex flex-col justify-center items-center w-[90px] h-11">
          <p className="font-semibold text-[18px]">NomNom</p>
          <p className="text-[#71717A] font-normal text-[12px]">
            Swift delivery
          </p>
        </div>
      </div>

      {/* MENU */}
      <div className="flex flex-col w-[165px] gap-6">
        <ButtonComponent
          text="Food menu"
          buttonVariant={activeButton === "food" ? "active" : "inactive"}
          onClick={() => router.push("/AdminHomePage/food")}
          buttonImage="/foodMenu.svg"
        />
        <ButtonComponent
          text="Orders"
          buttonVariant={activeButton === "orders" ? "active" : "inactive"}
          onClick={() => router.push("/AdminHomePage/orders")}
          buttonImage="/truck.svg"
        />
      </div>
    </div>
  );
}
