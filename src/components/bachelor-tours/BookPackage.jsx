import Image from "next/image";
import React from "react";
import { FaCalculator } from "react-icons/fa";

export const BookPackage = ({
  title,
  description,
  bgImage
}) => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Book Package"
        width={1200}
        height={260}
        className="
          w-full 
          h-[290px]       /* DESKTOP unchanged */
          rounded-2xl 
          object-cover

          /* RESPONSIVE */
          md:h-[290px]
          sm:h-[220px]
          h-[200px]
        "
      />

      {/* Overlay Content */}
      <div
        className="
          absolute 
          top-1/2 
          left-1/2 
          flex 
          flex-col 
          items-center 
          -translate-x-1/2 
          -translate-y-1/2 
          text-white 
          space-y-6

          /* RESPONSIVE */
          sm:space-y-4
          space-y-3
          px-2
        "
      >
        {/* Dynamic Title */}
        <h2
          className="
            text-3xl
            md:text-3xl      /* DESKTOP unchanged */
            text-center 
            font-semibold 
            drop-shadow-lg

            /* RESPONSIVE */
            sm:text-2xl
            text-xl
          "
        >
          {title}
        </h2>

        <p  className="
            text-sm
            md:text-sm      /* DESKTOP unchanged */
            text-center 
            font-normal
            drop-shadow-lg
            /* RESPONSIVE */
            sm:text-sm
            text-sm
          ">
{description}
        </p>

        {/* CTA Box */}
        <div
          className="
            py-2 
            px-6 
            rounded-xl 
            bg-white 
            border 
            text-black
            
            /* RESPONSIVE */
            sm:py-2 sm:px-5
            py-1 px-4
          "
        >
          <div className="flex justify-between items-center gap-4">

            {/* Icon */}
            <a href="/all-packages" className="rounded-full bg-white">
              <FaCalculator
                size={20}
                className="
                  text-black
                  /* RESPONSIVE */
                  sm:size-5 
                  size-4
                "
              />
            </a>

            {/* Button Text */}
            <a
              href="/contactus"
              className="
                text-black 
                text-[16px] 
                font-medium

                /* RESPONSIVE */
                sm:text-[15px]
                text-[14px]
              "
            >
              Enquire Now
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};
