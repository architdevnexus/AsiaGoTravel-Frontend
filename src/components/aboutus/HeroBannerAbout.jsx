import Image from "next/image";
import React from "react";

export const HeroBannerAbout = () => {
  return (
    <section className="relative w-full h-[400px]    flex items-center mt-20 justify-center text-center">
      {/* Background Image */}
      <Image
        src="/img/Aboutbg.png"
        alt="About Banner"
        width={1200}
        height={400}
        className="object-cover max-sm:h-[380px] "
        priority
      />

      {/* Overlay Text */}
      <div className="absolute z-10 text-white px-6 max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        <h2 className="font-bold text-3xl md:text-4xl mb-4">About Us</h2>
        <p className="text-sm md:text-base leading-relaxed">
      Welcome to Asiago Travels, a premium travel company based in Jaipur, Rajasthan, dedicated to creating seamless and memorable domestic and international holiday experiences. We believe that travel is not just about reaching a destination — it is about exploring new cultures, enjoying quality time, and creating lifelong memories.
        </p>
      </div>
    </section>
  );
};
