import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export const WhatWeOfferComponent = () => {
  const images = [
    { src: "/img/aboutimg1.jpg", text: "Honeymoon Trips" },
    { src: "/img/aboutimg2.jpg", text: "Family Holidays" },
    // { src: "/img/aboutimg4.png", text: "Family Group Tours" },
    { src: "/img/aboutimg5.jpg", text: "Bachelor Tours" },
    { src: "/img/aboutimg3.jpg", text: "Luxury Tours" },
    { src: "/img/aboutimg4.png", text: "Premium Holiday Packages" },

    // { src: "/img/aboutimg3.jpg", text: "Personalized Tours" },

  ];

  return (
    <section className="p-6 relative">

      {/* ✅ Title image — desktop untouched / mobile centered */}
      <Image
        src="/img/WHAT WE OFFER.svg"
        width={70}
        height={100}
        alt="What We Offer"
        className="
          w-[50%] h-auto mb-6 absolute top-4 right-16
          max-sm:static max-sm:mx-auto max-sm:mb-4 max-sm:w-[70%]
        "
      />

      {/* ✅ DESKTOP grid UNTOUCHED */}
      <div
        className="
          grid grid-cols-3 grid-rows-2 gap-y-6 gap-x-4 relative z-10
          max-sm:grid-cols-1 max-sm:grid-rows-none
        "
      >
        {images.map((item, index) => (
         <div
  key={index}
  className={`
    relative overflow-hidden rounded-xl shadow-md group
    ${index === images.length - 1 ? "col-span-2" : ""}
    max-sm:col-span-1 h-60 max-sm:h-52
  `}
>
  <Image
    src={item.src}
    alt={`offer-${index}`}
    fill
    className="object-cover transition-transform duration-300 group-hover:scale-105"
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent max-sm:opacity-80"></div>

  {/* Text */}
  <div
    className="
      flex items-center absolute bottom-1 right-4 text-white
      opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500
      max-sm:opacity-100 max-sm:static max-sm:translate-y-0 max-sm:flex max-sm:justify-center max-sm:gap-2 max-sm:py-3
    "
  >
    <h3 className="text-xl font-semibold max-sm:text-base">{item.text}</h3>
    <IoIosArrowRoundForward className="text-white h-18 w-10 max-sm:w-6 max-sm:h-6" />
  </div>
</div>

        ))}
      </div>
    </section>
  );
};
