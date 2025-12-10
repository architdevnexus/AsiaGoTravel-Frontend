import Image from "next/image";
import React from "react";



export const Activites = ({title, activitiesData}) => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <Image
        src="/img/ActivityBg.png"
        width={1920}
        height={1080}
        alt="activities background"
        className="w-full h-[650px] object-cover"
      />

      {/* Floating White Card */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white w-[85%] rounded-3xl shadow-2xl p-12  relative">

          {/* Title */}
          <h2 className="text-center text-2xl font-semibold text-[#1B4965]">
           {title}
          </h2>

          {/* Divider */}
          <div className="w-48 h-[2px] bg-[#1B4965] mx-auto mt-3 mb-10 opacity-40 rounded-full"></div>

          {/* Dynamic Grid */}
          <div className="grid grid-cols-3 gap-12">
            {activitiesData.map((item, index) => (
              <div key={index} className="text-center">
                <Image
                  src={item.icon}
                  width={50}
                  height={50}
                  alt={item.title}
                  className="mx-auto mb-3"
                />

                <h3 className="text-lg font-semibold text-[#1B4965]">
                  {item.title}
                </h3>

                <ul className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
