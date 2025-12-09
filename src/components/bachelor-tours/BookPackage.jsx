import Image from "next/image";
import React from "react";
import { Button } from "../global/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";

export const BookPackage = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <Image
        src="/img/BookingImage.png"
        alt="Book Package"  
        width={1200}
        height={260}
        className="w-full h-[290px] rounded-2xl object-cover"
      />

      {/* Text + Button Overlay */}
      <div className=" absolute top-1/2 left-1/2 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 text-white space-y-6">
        <h2 className="text-3xl md:text-3xl font-semibold text-center drop-shadow-lg">
          Book your Honeymoon Package Now!
        </h2>
      <div className="py-2 px-6 rounded-xl  bg-white w-50 border text-black ">
        <div className="flex justify-between items-center ">
              <a href="/all-packages" className="rounded-full bg-white ">
            <FaCalculator size={20}   className=" color-black" />
          </a>
          <a href="/contactus" className="text-black text-[16px]">
            Enquire Now
          </a>
       
        </div>
      </div>
      </div>
 
    </section>
  );
};
