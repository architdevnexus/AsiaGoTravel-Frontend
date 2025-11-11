import Image from "next/image";
import React from "react";

export const HeroBannerAbout = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center mt-20 justify-center text-center">
      {/* Background Image */}
      <Image
        src="/img/Aboutbg.png"
        alt="About Banner"
        width={1200}
        height={400}
        className="object-cover"
        priority
      />

      {/* Overlay Text */}
      <div className="absolute z-10 text-white px-6 max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        <h2 className="font-bold text-3xl md:text-4xl mb-4">About Us</h2>
        <p className="text-sm md:text-base leading-relaxed">
          At Asia Go Travels, we’re passionate about creating journeys that go
          beyond destinations — experiences that stay with you for a lifetime.
          With years of expertise in the travel industry. From relaxing getaways
          to adventurous expeditions, we make every trip seamless, affordable,
          and unforgettable.
        </p>
      </div>
    </section>
  );
};
