"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TestimonialCardStack } from "./TestimonialCardStack";

const LoaderSpinner = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="w-12 h-12 border-4 border-[#1B4965] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export const Testimonial = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading (replace with actual fetch if needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex justify-center items-center pt-20 pb-10 
                    flex-col md:flex-row">

      {/* ---------------- WEB LEFT SIDE CONTENT ---------------- */}
      <div className="w-full md:w-1/2 md:block hidden">
        <div className="bg-[#CCDEEB] h-2 rounded-tr-4xl my-10"></div>

        <div className="pl-20">
          <div className="h-1 my-4 bg-[#1B4965] w-10"></div>

          <span className="text-[#949494] text-normal font-medium py-10">
            Our Reviews
          </span>

          <p className="text-3xl font-bold leading-12 pt-2">
            What Our <br /> Clients say
          </p>
        </div>

        <div className="bg-[#CCDEEB] h-2 rounded-tr-4xl my-10"></div>
      </div>

      {/* ---------------- MOBILE/TAB HEADER ---------------- */}
      <div className="w-full text-center md:hidden">
        <div className="bg-[#CCDEEB] h-2 rounded-tr-4xl my-6 w-1/2 mx-auto"></div>

        <div className="flex flex-col items-center">
          <div className="h-1 my-2 bg-[#1B4965] w-10"></div>

          <span className="text-[#949494] text-sm font-medium">
            Our Reviews
          </span>

          <p className="text-2xl font-bold leading-tight pt-2">
            What Our Clients Say
          </p>
        </div>

        <div className="bg-[#CCDEEB] h-2 rounded-tr-4xl my-6 w-1/2 mx-auto"></div>
      </div>

      {/* ---------------- TESTIMONIAL CARDS OR LOADER ---------------- */}
      <div className="md:absolute md:right-52 w-full md:w-auto flex justify-center mt-6">
        {loading ? <LoaderSpinner /> : <TestimonialCardStack />}
      </div>

      {/* ---------------- RIGHT SIDE BG (WEB) ---------------- */}
      <div className="w-1/2 md:block hidden">
        <Image
          src="/img/Testimonialbg.svg"
          width={460}
          height={100}
          alt="bg"
        />
      </div>
    </div>
  );
};
