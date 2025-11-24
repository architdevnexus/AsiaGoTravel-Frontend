import Image from "next/image";
import React from "react";
import { FaHandHoldingDroplet } from "react-icons/fa6";

export const WhyChooseUs = () => {
  const cards = [
    {
      src: "/img/choose1.svg",
      text: "Personalized Travel Experiences",
      description:
        "We curate premium domestic and international holiday packages tailored to your comfort and preferences.",
    },
    {
      src: "/img/choose2.svg",
      text: "End-to-End Travel Solutions",
      description:
        "From planning and bookings to transfers and guided tours, we handle every detail seamlessly.",
    },
    {
      src: "/img/choose3.svg",
      text: "Commitment to Quality Service",
      description:
        "Our focus on comfort, transparency, and attention to detail ensures a smooth travel experience.",
    },
    {
      src: "/img/choose4.svg",
      text: "Trusted Global Network",
      description:
        "We work with a proven network of reliable partners to provide top-tier travel services worldwide.",
    },
    {
      src: "/img/choose5.svg",
      text: "24/7 Customer Support",
      description:
        "Our team is always available to assist you at any stage of your journey.",
    },
    {
      src: "/img/choose2.svg",
      text: "Journeys Crafted for Memories",
      description:
        "Every trip with Asiago Travels is designed to be effortless, enjoyable, and truly unforgettable.",
    },
  ];

  return (
    <div className="px-4 sm:px-10 lg:px-16">
      {/* Title Image */}
      <Image
        src="/img/whychooseus.svg"
        width={70}
        height={100}
        alt="Why Choose Us"
        className="w-[85%] sm:w-[60%] lg:w-[50%] h-auto mb-4 sm:mb-6 relative -bottom-6 sm:-bottom-20"
      />

      {/* Cards Grid */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-5 
        sm:gap-8 
        lg:gap-10 
        mt-10 
        sm:mt-20 
        lg:mt-24
        relative z-10
      "
      >
        {cards.map((card, index) => (
          <div key={index} className="relative flex justify-center sm:block ">
            {/* Left Blue Rounded Bar */}
            <div
              className="
              bg-[#1B4965] 
              rounded-l-full 
              absolute 
              h-20 
              w-3 
              left-1 
              top-1/2 
              -translate-y-1/2  
              sm:h-28 
              sm:w-4.5 
              sm:-left-4
            "
            ></div>

            {/* Card Content */}
            <div
              className="
    bg-[#E6F4FF]
    rounded-xl
    shadow-md
    px-4
    py-5
    sm:px-8
    sm:py-6
    w-full
    max-w-[380px]
    sm:max-w-full
    hover:shadow-lg
    transition-all
    duration-200
    h-full
    flex
    flex-col
    min-h-[200px]  
   
  "
            >
              {/* Icon Circle */}
              <div
                className="
                bg-white 
                rounded-full 
                w-14 
                h-14 
                sm:w-16 
                sm:h-16 
                flex 
                items-center 
                justify-center 
                text-[#1B4965] 
                mb-3
              "
              >
                <Image
                  src={card.src}
                  alt={card.text}
                  width={40}
                  height={40}
                  className="object-contain w-8 h-8 sm:w-10 sm:h-10 p-1.5"
                />
              </div>

              {/* Text */}
              <h3 className="text-base sm:text-lg font-semibold my-3 leading-5">
                {card.text}
              </h3>

              <p className="text-xs sm:text-sm text-[#858585] leading-5  line-clamp-3">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
