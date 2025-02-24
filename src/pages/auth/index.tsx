import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/layout.module";
import Loading from "@/components/loading/loading.module";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPasssword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  function handleLogin(e: any) {
    e.preventDefault();

    const data = {
      username: "agus123",
      password: "handless",
    };

    if (data.username === username && data.password === password) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        router.push("/product");
      }, 2000);
    } else {
      alert("login gagal, silahkan cek username dan password");
    }
  }

  return (
    <Layout>
      {isLoading === false ? (
        <div className="flex flex-col justify-center items-center mt-10 w-full h-screen">
          <h2 className="text-2xl font-bold text-amber-500">Madura Shop</h2>
          <form className="flex flex-col gap-y-5" onSubmit={handleLogin}>
            <input
              type="text"
              className="border p-3 my-2 rounded-md w-60 text-black"
              placeholder="ketik username disini"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              className="border p-3 my-2 rounded-md w-60 text-black"
              placeholder="ketik password disini"
              onChange={(e) => setPasssword(e.target.value)}
            />
            <button
              type="submit"
              className="p-3 bg-amber-600 hover:bg-amber-800 rounded-md font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
