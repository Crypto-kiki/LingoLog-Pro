"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/main");
    }
  });

  return (
    <div className="flex gap-5 p-2 bg-slate-200 ">
      <div className="flex gap-2 ml-auto">
        {session?.user ? (
          <>
            <img
              className="w-8 h-8 rounded-full"
              src={session.user.image || ""}
            />
            <p className="text-sky-600"> {session.user.email}</p>
            <button className="text-red-500" onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
