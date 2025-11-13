"use client";

import { useRouter } from "next/navigation";
import FoodPage from "./food/page";

export default function AdminPage() {
  const router = useRouter();

  return (
    <div className="flex">
      <FoodPage />
    </div>
  );
}
