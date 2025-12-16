"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TestimonialCardStack } from "./TestimonialCardStack";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LoaderSpinner = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="w-12 h-12 border-4 border-[#1B4965] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export const Testimonial = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Dispatch events to Card Stack
  const handlePrev = () => {
    window.dispatchEvent(new CustomEvent("testimonial-prev"));
  };

  const handleNext = () => {
    window.dispatchEvent(new CustomEvent("testimonial-next"));
  };

  return (
    <div className="relative flex justify-center items-center pt-20 pb-10 flex-col md:flex-row">

      {/* ---------------- WEB LEFT SIDE ---------------- */}
      <div className="w-full md:w-1/2 md:block hidden">
        <div className="bg-[#CCDEEB] h-2 rounded-tr-4xl my-10"></div>

        <div className="pl-20">
          <div className="h-1 my-4 bg-[#1B4965] w-10"></div>
          <span className="text-[#949494] font-medium">Our Reviews</span>
          <p className="text-3xl font-bold pt-2">
            What Our <br /> Clients say
          </p>
        </div>

        <div className="bg-[#CCDEEB] h-2 rounded-tr-4xl my-10"></div>
      </div>

      {/* ---------------- MOBILE HEADER ---------------- */}
      <div className="w-full text-center md:hidden">
        <div className="bg-[#CCDEEB] h-2 w-1/2 mx-auto my-6"></div>

        <div className="flex flex-col items-center">
          <div className="h-1 bg-[#1B4965] w-10 my-2"></div>
          <span className="text-[#949494] text-sm font-medium">Our Reviews</span>
          <p className="text-2xl font-bold pt-2">What Our Clients Say</p>
        </div>

        <div className="bg-[#CCDEEB] h-2 w-1/2 mx-auto my-6"></div>
      </div>

      {/* ---------------- CARD STACK + ARROWS ---------------- */}
      <div className="md:absolute md:right-52 w-full md:w-auto flex justify-center mt-6 relative">

        {!loading && (
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full"
          >
            <FaChevronLeft className="text-[#1B4965]" />
          </button>
        )}

        {loading ? <LoaderSpinner /> : <TestimonialCardStack />}

        {!loading && (
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full"
          >
            <FaChevronRight className="text-[#1B4965]" />
          </button>
        )}
      </div>

      {/* ---------------- RIGHT BG IMAGE ---------------- */}
      <div className="w-1/2 md:block hidden">
        <Image src="/img/Testimonialbg.svg" width={460} height={100} alt="bg" />
      </div>
    </div>
  );
};
