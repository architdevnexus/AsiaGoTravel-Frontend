import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

export const WhatWeOfferComponent = () => {
  const images = [
    { src: "/img/aboutimg1.jpg", text: "Weekend Trips" },
    { src: "/img/aboutimg2.jpg", text: "Domestic Trips" },
    { src: "/img/aboutimg4.png", text: "Corporate Trips" },
    { src: "/img/aboutimg5.jpg", text: "Backpacking Trips" },
    { src: "/img/aboutimg3.jpg", text: "Upcoming Group Trips" }, // last one spans 2 columns
  ];

  return (
    <section className="p-6 relative">
      <Image
        src="/img/WHAT WE OFFER.svg"
        width={70}
        height={100}
        alt="What We Offer"
        className="w-[50%] h-auto mb-6 absolute top-4 right-16"
      />

      <div className="grid grid-cols-3 grid-rows-2 gap-y-6 gap-x-4 relative z-10">
        {images.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl shadow-md group ${
              index === images.length - 1 ? "col-span-2" : ""
            }`}
          >
            <Image
              src={item.src}
              width={300}
              height={100}
              alt={`offer-${index}`}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Hover text */}
            <div className="flex items-center absolute bottom-1  right-4 text-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
            <div>
                  <h3 className="text-xl font-semibold">{item.text}</h3>
              {/* <p className="text-sm text-gray-200">Explore more</p> */}
              </div>
<IoIosArrowRoundForward className="text-white h-18 w-10" />
            </div>
        
          </div>
        ))}
      </div>
    </section>
  );
};
