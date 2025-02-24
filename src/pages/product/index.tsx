import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/layout.module";
import Card from "@/components/card/card";

import { data, DataProduct } from "../dummy/data";

export default function Product() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("All"); // --> Belum terfilter by category, akan menampilkan seluruh category
  const [sort, setSort] = useState<string>("None"); // --> belum terfilter maka akan menampilkan seluruh produk
  const router = useRouter();

  const categories = [
    "All",
    "Pangan Pokok",
    "Minyak & Lemak",
    "Protein Hewani",
    "Sayuran",
  ];

  const sortOption = [
    "None",
    "Harga termurah ke Harga termahal",
    "Harga termahal ke harga termurah",
  ];

  const filteredProducts = data
    .filter((product) =>
      category === "All" ? true : product.category === category
    )
    .filter((product) =>
      [product.title, product.description, product.price.toString()].some(
        (field) =>
          field.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    )
    .sort((low, high) => {
      if (sort === "Harga termurah ke Harga termahal") {
        return low.price - high.price;
      } else if (sort === "Harga termahal ke harga termurah") {
        return high.price - low.price;
      } else {
        return 0;
      }
    });

  return (
    <Layout>
      <div className="w-full h-full p-5 flex gap-x-5 bg-orange-500 text-black">
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-md w-1/2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded-md"
        >
          {categories.map((item, key) => (
            <option key={key}>{item}</option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded-md"
        >
          {sortOption.map((item, key) => (
            <option key={key}>{item}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-3 gap-5 p-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item: DataProduct, key: number) => {
            return (
              <Card
                key={key}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                category={item.category}
                onClick={() => router.push(`product/${item.id}`)}
              />
            );
          })
        ) : (
          <div className="w-screen h-screen flex justify-center items-center text-ccenter">
            <p className="text-lg font-semibold text-red-400">
              Produk tidak ada
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
