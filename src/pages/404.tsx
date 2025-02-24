import React from "react";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300 text-center">
      <h1 className="text-6xl font-bold text-amber-700">505</h1>
      <p className="text-xl font-bold text-amber-400">CARI APAAAA</p>
      <button
        className="bg-amber-600 hover:bg-amber-900 font-semibold text-white p-3 rounded-md"
        onClick={() => router.push("/product")}
      >
        Mending balik cuy
      </button>
    </div>
  );
}
