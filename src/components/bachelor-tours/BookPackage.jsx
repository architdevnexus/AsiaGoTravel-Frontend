import Image from "next/image";
import React from "react";
import { FaCalculator } from "react-icons/fa";

export const BookPackage = ({
  title,
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
        className="w-full h-[290px] rounded-2xl object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-1/2 left-1/2 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 text-white space-y-6">

        {/* Dynamic Title */}
        <h2 className="text-3xl md:text-3xl font-semibold text-center drop-shadow-lg">
          {title}
        </h2>

        {/* Static CTA Box */}
        <div className="py-2 px-6 rounded-xl bg-white border text-black">
          <div className="flex justify-between items-center gap-4">

            {/* Static Icon + Link */}
            <a href="/all-packages" className="rounded-full bg-white">
              <FaCalculator size={20} className="text-black" />
            </a>

            {/* Static Button Text + Redirect */}
            <a href="/contactus" className="text-black text-[16px] font-medium">
              Enquire Now
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};
