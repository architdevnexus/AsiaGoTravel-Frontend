import Image from "next/image";
import React from "react";

export const WhoWeAre = () => {
  return (
    <section>
      <h2 className="flex justify-center items-center text-center text-2xl font-bold">
        Who We Are ?
      </h2>

      <div className="flex justify-center items-center">

        {/* ✅ WEB stays same — MOBILE stacks */}
        <div
          className="
            flex items-center gap-10 absolute
            max-sm:static max-sm:flex-col max-sm:gap-6 max-sm:z-10
          "
        >
          {/* Card 1 */}
          <div
            className="
              bg-[#1B4965] rounded-xl text-white flex-col justify-center items-center text-center p-4 w-60 h-75 shadow-[0_0_15px_4px_rgb(172,183,191)]
              max-sm:w-72 max-sm:h-auto
            "
          >
            <span className="text-2xl">
              Our <br /> & <br /> Mission
            </span>
            <p className="text-[#EAEAEA] text-[12px] leading-6 pt-10">
             To design seamless, personalized, and premium travel experiences that inspire, connect, and create lasting memories.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              bg-[#0D1B2A] rounded-xl text-white flex-col justify-center items-center text-center p-7 w-70 h-80 shadow-[0_0_15px_4px_rgb(172,183,191)]
              max-sm:w-72 max-sm:h-auto
            "
          >
            <span className="text-2xl">
              Core <br /> & <br /> Values
            </span>
            <p className="text-[#EAEAEA] text-[12px] leading-6 pt-10">
              To deliver seamless, end to end travel experience build on Professionalism, transparency, and meticulous attention to every details while curating the tour package. 
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              bg-[#1B4965] rounded-xl text-white flex-col justify-center items-center text-center p-4 w-60 h-75 shadow-[0_0_15px_4px_rgb(172,183,191)]
              max-sm:w-72 max-sm:h-auto
            "
          >
            <span className="text-2xl">
              Our <br /> & <br /> Vision
            </span>
            <p className="text-[#EAEAEA] text-[12px] leading-6 pt-10">
To become India’s most trusted premium travel brand, known for crafting exceptional and personalized travel experiences across the globe.
            </p>
          </div>
        </div>

        {/* ✅ background image (unchanged) */}
        <Image
          src="/img/background.jpg"
          width={200}
          height={100}
          alt="background"
          className="object-cover w-full h-full max-sm:hidden"
        />
      </div>
    </section>
  );
};
