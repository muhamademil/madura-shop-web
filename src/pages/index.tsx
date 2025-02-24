import React from "react";
// import Layout from "@/components/layout/layout.module";
import Layout from "@/components/layout/layout.module";
import { useRouter } from "next/router";

export default function LandingPage() {
  const router = useRouter();
  return (
    <Layout>
      <div className="flex w-full h-full">
        <div className="w-full h-screen flex flex-col gap-y-20 justify-center items-start bg-amber-400 p-10">
          <div className="font-bold text-2xl">
            <p>Madura Shop - Buka Sampai Kiamat</p>
          </div>
          <div className="font-medium">
            <p>Belanja Sembako Murah & Terjangkau!</p>
            <p>
              Dapatkan harga terbaik untuk kebutuhan sehari-hari hanya di Madura
              Shop
            </p>
          </div>
          <button
            className="bg-amber-600 hover:bg-amber-700 rounded-md text-center p-3 font-semibold"
            onClick={() => router.push("/auth")}
          >
            Belanja Sekarang
          </button>
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <img
            src="https://i.pinimg.com/736x/6d/d6/64/6dd664480d7a5d985950191393ca3c6e.jpg"
            className="w-80 h-80 rounded-md flex"
          />
        </div>
      </div>
    </Layout>
  );
}
