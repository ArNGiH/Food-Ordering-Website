"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Enlarged Box with Black Border */}
      <div className="w-full max-w-7xl shadow-2xl rounded-xl flex flex-col md:flex-row overflow-hidden border-4 border-black">
        {/* IMAGE CONTAINER */}
        <div className="relative h-96 md:h-auto md:w-1/2">
          <Image src="/loginBg.png" alt="Login Background" fill className="object-cover" />
        </div>

        {/* FORM CONTAINER */}
        <div className="p-20 flex flex-col gap-12 justify-center md:w-1/2">
          <h1 className="font-extrabold text-5xl">Welcome</h1>
          <p className="text-lg">Log into your account or create a new one using the buttons below.</p>

          <button
            className="flex items-center gap-5 p-6 w-full ring-2 ring-orange-300 rounded-lg text-xl hover:ring-orange-400 transition"
            onClick={() => signIn("google")}
          >
            <Image src="/google.png" alt="Google" width={32} height={32} />
            <span>Sign in with Google</span>
          </button>

          <button className="flex items-center gap-5 p-6 w-full ring-2 ring-blue-300 rounded-lg text-xl hover:ring-blue-400 transition"
          onClick={()=>signIn("google")}>
            <Image src="/facebook.png" alt="Facebook" width={32} height={32} />
            <span>Sign in with Facebook</span>
          </button>

          <p className="text-lg">
            Have a problem? <Link className="underline" href="/">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
