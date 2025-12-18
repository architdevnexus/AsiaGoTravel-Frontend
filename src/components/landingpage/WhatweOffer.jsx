import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export const WhatWeOfferComponent = ({images}) => {


  return (
    <section className="p-6 relative">

      {/* Title image */}
      <Image
        src="/img/WHAT WE OFFER.svg"
        width={70}
        height={100}
        alt="What We Offer"
        className="
          w-[50%] h-auto mb-6 absolute top-0.5 right-16
          max-sm:static max-sm:mx-auto max-sm:mb-4 max-sm:w-[70%]
        "
      />

      {/* Grid */}
      <div
        className="
          grid grid-cols-3 grid-rows-2 gap-y-6 gap-x-4 relative z-10
          max-sm:grid-cols-1 max-sm:grid-rows-none
        "
      >
        {images?.map((item, index) => (
          <Link
            key={index}
            href={item?.href}
            className={`
              relative overflow-hidden rounded-xl shadow-md group cursor-pointer block
              ${index === images.length - 1 ? "col-span-2" : ""}
              max-sm:col-span-1 h-60 max-sm:h-52
            `}
          >
            <Image
              src={item?.src}
              alt={`offer-${index}`}
              fill
              className="
                object-cover transition-all duration-500
                group-hover:scale-110 group-hover:brightness-90
              "
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent max-sm:opacity-80"></div>

            {/* Text */}
            <div
              className="
                flex items-center absolute bottom-1 right-4 text-white
                opacity-0 group-hover:opacity-100 translate-y-3
                group-hover:translate-y-0 transition-all duration-500
                max-sm:opacity-100 max-sm:static max-sm:translate-y-0
                max-sm:flex max-sm:justify-center max-sm:gap-2 max-sm:py-3
              "
            >
              <h3 className="text-xl font-semibold max-sm:text-base">
                {item?.text}
              </h3>
              <IoIosArrowRoundForward className="text-white h-18 w-10 max-sm:w-6 max-sm:h-6" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
