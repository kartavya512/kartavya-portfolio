"use client";
import Link from "next/link";
import React from "react";

import {usePathname } from "next/navigation";

const Navbar = () => {
  
  const currentRoute = usePathname();
  
  return (
    <div className="">
      <div className="flex items-center">
       
      </div>
      <div className="flex items-center justify-center">
        <div className="fixed  top-0 shadow lg:w-[30%]  bg-white rounded-xl mt-4 py-2 px-4 lg:px-0 ">
          <div className="">
            <div className="flex space-x-10  justify-center text-sm font-semibold">
              <Link href="/" passHref>
              
                <div
                  className={`text-sm font-medium ${
                    currentRoute === "/"
                      ? "  text-green-600"
                      : "text-gray-700"
                  }`}
                >
                  {" "}
                  Home
                </div>
              </Link>
              <div
                className={`text-sm font-medium ${
                  currentRoute === "/about"
                    ? "  text-green-600"
                    : "text-gray-700"
                }`}
              >
                
                <Link href="/about" passHref>
                  About
                </Link>
              </div>
              <div
                className={`text-sm font-medium ${
                  currentRoute === "/projects"
                    ? "  text-green-600"
                    : "text-gray-700"
                }`}
              >
                
                <Link href="/projects" passHref>
                  Projects
                </Link>
              </div>
              <div
                className={`text-sm font-medium ${
                  currentRoute === "/contact"
                    ? "  text-green-600"
                    : "text-gray-700"
                }`}
              >
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
