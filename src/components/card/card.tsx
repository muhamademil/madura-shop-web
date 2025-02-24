import React from "react";
import { DataProduct } from "@/dummy/data";

export default function Card({
  id,
  title,
  description,
  image,
  price,
  category,
  onClick,
}: DataProduct) {
  return (
    <div
      id={id}
      className="border p-4 rounded shadow-sm hover:bg-slate-800 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={
          image !== ""
            ? image
            : "https://st2.depositphotos.com/2586633/46477/v/1600/depositphotos_464771766-stock-illustration-no-photo-or-blank-image.jpg"
        }
        alt={title}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <div className="flex flex-col gap-y-5">
        <h2 className="text-lg font-semibold text-red-600">{title}</h2>
        <p className="text-slate-600">{description}</p>
        <p className="font-bold text-red-500">{price}</p>
        <p className="text-sm text-gray-500">Category{category}</p>
      </div>
    </div>
  );
}
