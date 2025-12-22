import Image from "next/image";
import React from "react";
import { FaAward } from "react-icons/fa";

export const OurBenefitsSection = () => {
  const benefits = [
    {
      icon: <FaAward size={40} />,
      title: "24*7 Customer Service",
      // desc: "We are proud to be an award-winning travel company.",
      bg: "#D4EDFF",
      iconBg: "#003E68",
    },
    {
      icon: <FaAward size={40} />,
      title: "Premium Tour Package",
      // desc: "Our employees receive competitive allowances that support their daily needs.",
      bg: "#FFEFD4",
      iconBg: "#AD6800",
    },
    {
      icon: <FaAward size={40} />,
      title: "Travel Insurance",
      // desc: "We offer complete insurance coverage for all team members.",
      bg: "#E8FFD4",
      iconBg: "#2E7D32",
    },
        {
      icon: <FaAward size={40} />,
      title: "Flight Booking",
      // desc: "We offer complete insurance coverage for all team members.",
      bg: "#D4EDFF",
      iconBg: "#003E68",
    },
       {
      icon: <FaAward size={40} />,
      title: "Premium Cab booking",
      // desc: "We offer complete insurance coverage for all team members.",
     bg: "#FFEFD4",
      iconBg: "#AD6800",
    },
  ];

  return (
    <div className="w-full px-6 md:px-10 py-20 bg-white">
      {/* Top Content */}
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-[#E7F2FF] text-[#656565] px-4 py-2 rounded-full text-sm font-semibold">
            Our Benefits
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-black leading-snug mt-4">
            Our travel company has been<br />helping people explore the world.
          </h2>
        </div>

        <p className="text-[#7A869A] leading-relaxed text-lg">
          At AsiaGo Travels, we believe great work happens when passionate
          people come together with a shared purpose. For over 20 years, we've
          been helping travellers explore the world through curated travel
          packages, memorable experiences, and trusted services. Now, we're
          looking for talented people who want to grow with us.
        </p>
      </div>

      {/* ⭐ Dynamic Benefits Section */}
      <div className="flex flex-wrap gap-10  my-15 justify-center items-center">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-lg flex gap-5 items-center"
            style={{ backgroundColor: item.bg }}
          >
            <div
              className="rounded-full text-white p-2"
              style={{ backgroundColor: item.iconBg }}
            >
              {item.icon}
            </div>

            <div className="w-60">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-sm text-[#676767]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
