import Image from "next/image";
import React from "react";
import HomePageSearchPackages from "../global/HomePageSearch";

export const HeroAllPackage = () => {
  return (
    <section className="relative w-full h-[400px]  flex flex-col justify-center   text-white">
      {/* Background Image */}
      <Image
        src="/img/allpackagebg.png"
        alt="All Package Background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Overlay (optional if image is bright) */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* Content */}
      <div className="space-y-4 px-4 pb-20">
        <h1 className="text-4xl md:text-4xl font-bold">
          Popular Travel Packages
        </h1>
        <p className="text-lg md:text-xl">
          Discover personalized travel experiences designed around you.
        </p>

    
      </div>
          {/* Search Section */}
  
    </section>
  );
};
