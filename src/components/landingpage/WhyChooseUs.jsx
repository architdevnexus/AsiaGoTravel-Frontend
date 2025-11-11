import Image from "next/image";
import React from "react";
import { FaHandHoldingDroplet } from "react-icons/fa6";

export const WhyChooseUs = () => {
  const cards = [
    { src: "/img/aboutimg1.jpg", text: "Luxury Stay" },
    { src: "/img/aboutimg2.jpg", text: "Adventure Trips" },
    { src: "/img/aboutimg3.jpg", text: "Cultural Tours" },
    { src: "/img/aboutimg1.jpg", text: "Family Packages" },
    { src: "/img/aboutimg2.jpg", text: "Beach Getaways" },
    { src: "/img/aboutimg2.jpg", text: "Romantic Escapes" },
  ];

  return (
    <div className="px-16">
      {/* Title Image */}
      <Image
        src="/img/whychooseus.svg"
        width={70}
        height={100}
        alt="Why Choose Us"
        className="w-[50%] h-auto mb-6 relative -bottom-25"
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 relative z-10">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            {/* Left Blue Rounded Bar */}
            <div className="bg-[#1B4965] rounded-l-full absolute h-28 w-4.5 -left-4 top-1/3 -translate-y-1/2"></div>

            {/* Card Content */}
            <div className="bg-[#E6F4FF] rounded-xl shadow-md px-8 py-6 relative z-10 hover:shadow-lg transition-all duration-200">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-[#1B4965] mb-3">
                <FaHandHoldingDroplet size={30} />
              </div>
              <h3 className="text-lg font-semibold mb-2 leading-5">
                {card.text}
              </h3>
              <p className="text-sm text-[#858585] leading-5">
                Enjoy unbeatable deals and transparent pricing. We partner
                directly with hotels, airlines, and local guides to offer you
                exclusive discounts.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
