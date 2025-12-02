"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

export const PackageProductPage = ({ images = [], title = "" }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-50 p-5 rounded-lg relative">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      <div className="relative">

        {/* LEFT ARROW — UI SAME, ONLY POSITION CHANGED */}
        <div
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
          flex items-center justify-center w-10 h-[325px] 
          bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100 transition"
        >
          <FaChevronLeft className="text-gray-600 text-lg" />
        </div>

        {/* SCROLLABLE IMAGE AREA */}
        <div
          ref={scrollRef}
          className="flex gap-3  px-12"
        >
          {/* Left Large Image */}
          {images[0]?.url && (
            <div className="relative w-[400px] h-[325px] rounded-lg overflow-hidden shrink-0">
              <Image src={images[0].url} alt="" fill className="object-cover" />
            </div>
          )}

          {/* Middle stacked images */}
          <div className="flex flex-col gap-2 shrink-0">
            {[1, 2].map(
              (i) =>
                images[i]?.url && (
                  <div
                    key={i}
                    className="relative w-[300px] h-40 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={images[i].url}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                )
            )}
          </div>

          {/* Right Large Image */}
          {images[3]?.url && (
            <div className="relative w-[400px] h-[325px] rounded-lg shrink-0">
              <Image src={images[3].url} alt="" fill className="object-cover" />
            </div>
          )}
        </div>

        {/* RIGHT ARROW — UI SAME, ONLY POSITION CHANGED */}
        <div
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
          flex items-center justify-center w-10 h-[325px] 
          bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100 transition"
        >
          <FaChevronRight className="text-gray-600 text-lg" />
        </div>
      </div>
    </div>
  );
};
