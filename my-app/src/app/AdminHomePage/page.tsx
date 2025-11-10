"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/_components/navigation";

export default function AdminPage() {
  const router = useRouter();

  return (
    <div className="flex">
      <Navigation />
    </div>
  );
}
