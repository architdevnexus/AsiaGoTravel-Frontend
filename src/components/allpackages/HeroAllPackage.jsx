import Image from "next/image";
import React from "react";
import HomePageSearchPackages from "../global/HomePageSearch";

export const HeroAllPackage = ({ 
  title, 
  description, 
  imageSrc 
}) => {
  return (
    <section className="relative w-full h-[400px] flex flex-col justify-center text-white">
      {/* Dynamic Background Image */}
      <Image
        src={imageSrc}
        alt="Hero Background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* Content */}
      <div className="space-y-4 px-4 pb-20">
        <h1 className="text-4xl md:text-4xl font-bold">{title}</h1>
        <p className="text-lg md:text-xl">{description}</p>
      </div>

      {/* Search Section */}
      {/* <HomePageSearchPackages /> */}
    </section>
  );
};
