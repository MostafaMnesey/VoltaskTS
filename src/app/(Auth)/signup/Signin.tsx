"use client";
import React from "react";
import Form from "./Form/Form";
/* import {  useSelector } from "react-redux"; */

export default function Signin({  }) {
  

  return (
    <>
      <div className="w-full h-screen grid grid-cols-3">
        {/* Left side image and message */}
        <div
          className="bg-side hidden md:flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url('/imgs/side.png')`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-white text-2xl sm:text-3xl font-bold font-['Poppins'] text-center px-4">
            <h1>Welcome !</h1>
          </div>
          <div className="text-white text-lg sm:text-xl font-normal font-['Poppins'] text-center px-4">
            <p></p>
          </div>
        </div>

        {/* Right login section */}
        <div className="col-span-3 md:col-span-2 flex flex-col h-full">
          <div className="flex justify-end p-6"></div>

          <div className="flex-grow flex items-center justify-center px-4">
            <div className="w-full max-w-md">
              <div className="text-start mb-8">
                <h2 className="text-3xl font-bold text-[#4C4C4C] mb-2">
                  Welcome Back
                </h2>
                <p className="text-gray-600 text-sm">
                  Let’s take the next step toward balance together.
                </p>
              </div>
              <Form pathname="/register"   />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
