"use client";
import Image from "next/image";
import React from "react";

const ValuesMissionVision = () => {
  const data = [
    {
      title: "VALUES",
      text: "We put our guests at the heart of every decision, ensuring comfort, clarity, and personalization. Clear communication, honest pricing, and ethical practices form the foundation of every service we deliver.",
      gradient: "from-[#4F0000] to-[#B60000]",
      iconBg: "bg-[#ffffff]",
    },
    {
      title: "MISSION",
      text: "To design seamless, personalized, and premium travel experiences that inspire, connect, and create lasting memories. End-to-end travel experiences built on professionalism, transparency, and meticulous attention to detail while curating the tour package.",
      gradient: "from-[#F9AA00] to-[#FF8C00]",
      iconBg: "bg-[#ffffff]",
    },
    {
      title: "VISION",
      text: "To become India’s most trusted premium travel brand, known for crafting exceptional and personalized travel experiences across the globe.",
      gradient: "from-[#001F54] to-[#00356F]",
      iconBg: "bg-[#ffffff]",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 rounded-xl overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between px-8 py-12 text-white text-center bg-linear-to-br ${item.gradient}`}
          >
            {/* Icon */}
            <div className="mx-auto mb-6">
              <div className="w-28 h-28 rounded-full flex items-center justify-center bg-white shadow-md">
                <Image
                  src="/img/best-seller.svg" 
                  alt="icon"
                  width={70}
                  height={70}
                />
              </div>
            </div>

            {/* Text */}
            <p className="text-sm md:text-base leading-relaxed opacity-95 mb-10">
              {item.text}
            </p>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-light tracking-wider opacity-90">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesMissionVision;
