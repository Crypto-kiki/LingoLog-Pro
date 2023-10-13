// components/Banner.js
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div className="fixed max-w-md w-full bottom-6">
      <div className="grid grid-cols-3 text-center items-center bg-gray-800 text-white rounded-full mx-2 py-4 px-8 text-sm">
        <Link href="/main">
          <div className="flex flex-col justify-center items-center">
            <FaHome
              className={`${
                path === "/main"
                  ? "text-2xl font-bold"
                  : "text-xl font-semibold text-gray-500"
              }`}
            />
          </div>
        </Link>
        <Link href="/upload">
          <div className="flex flex-col justify-center items-center">
            <HiDocumentArrowUp
              className={`${
                path === "/upload"
                  ? "text-2xl font-bold"
                  : "text-xl font-semibold text-gray-500"
              }`}
            />
          </div>
        </Link>
        <Link href="/study">
          <div className="flex flex-col justify-center items-center">
            <GiOpenBook
              className={`${
                path === "/study"
                  ? "text-2xl font-bold"
                  : "text-xl font-semibold text-gray-500"
              }`}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
