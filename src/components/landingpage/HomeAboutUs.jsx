import React from "react";
import { Button } from "../global/Button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export const AboutUsComponent = () => {
  return (
    <section
      className="
        flex justify-around items-center
        lg:flex-row flex-col
        gap-10 lg:gap-0
        px-4
      "
    >
      {/* ✅ IMAGES */}
      <div
        className="flex gap-6 items-center 
          lg:flex-row 
          flex-col 
          w-full lg:w-auto"
      >
        {/* ✅ MOBILE — top full-width image */}
        <div className="lg:hidden w-full">
          <Image
            src="/img/aboutimg1.jpg"
            width={600}
            height={300}
            alt="about"
            className="rounded-lg w-full h-[220px] object-cover shadow-lg shadow-gray-600"
          />
        </div>

        {/* ✅ MOBILE — bottom 2 images */}
        <div className="lg:hidden flex w-full gap-3">
          <Image
            src="/img/aboutimg2.jpg"
            width={300}
            height={200}
            alt="about"
            className="rounded-lg w-1/2 h-[150px] object-cover shadow-lg shadow-gray-600"
          />
          <Image
            src="/img/aboutimg3.jpg"
            width={300}
            height={200}
            alt="about"
            className="rounded-lg w-1/2 h-[150px] object-cover shadow-lg shadow-gray-600"
          />
        </div>

        {/* ✅ DESKTOP — original arrangement (unchanged) */}
        <div className="hidden lg:flex gap-6 items-center">
          <Image
            src="/img/aboutimg1.jpg"
            width={190}
            height={203}
            alt="about"
            className="rounded-lg h-[219px] shadow-lg shadow-gray-600"
          />

          <div>
            <Image
              src="/img/aboutimg2.jpg"
              width={210}
              height={100}
              alt="about"
              className="rounded-lg h-[180px] mb-6 shadow-lg shadow-gray-600"
            />
            <Image
              src="/img/aboutimg3.jpg"
              width={240}
              height={100}
              alt="about"
              className="rounded-lg h-[220px] shadow-lg shadow-gray-600"
            />
          </div>
        </div>
      </div>

      {/* ✅ TEXT SECTION */}
      <div className="space-y-4 w-full lg:w-1/2 text-left">
        <h1 className="text-[#1B4965] font-bold text-3xl">About Us</h1>

        <p className="text-lg leading-2xl">
          We are a premium travel company deals in Domestic and International
          holiday packages. We curate tour itinerary along with the experiences,
          so that our guest not only enjoy their tour but they create memories
          while enjoying that particular experience. With Asiago Travels, every
          guest will get personalized services, our destination experts provide
          full insights to the guests about the destination, so that they can
          get so much familiarize with the location and other activities so,
          they will not hesitate for enjoying the activity but also get an
          experience on the tour, and create a memories.
        </p>

        <div
          className="py-3 px-4 rounded-full bg-[#1B4965] w-50 shadow-xs shadow-current
             transition-all duration-500 ease-out
             hover:bg-[#163b52] hover:shadow-md hover:scale-[1.015] cursor-pointer"
        >
          <div className="flex justify-between items-center gap-3">
            <a
              href="/aboutus"
              className="text-white text-[18px] font-normal transition-all duration-500 ease-out 
                 group-hover:tracking-wide"
            >
              Explore More
            </a>

            <a
              href="/aboutus"
              className="rounded-full bg-white p-2 w-10 flex items-center justify-center
                 transition-all duration-500 ease-out
                 hover:translate-x-1"
            >
              <FaArrowRightLong className="w-6 transition-transform duration-500 ease-out" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
