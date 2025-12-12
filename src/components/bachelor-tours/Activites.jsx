import Image from "next/image";
import React from "react";

export const Activites = ({ title, activitiesData }) => {
  return (
    <div className="relative w-full">

      <Image
        src="/img/ActivityBg.png"
        width={1920}
        height={1080}
        alt="activities background"
        className="w-full h-[650px] object-cover"
      />

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white w-[85%] rounded-3xl shadow-2xl p-12 relative">

          <h2 className="text-center text-2xl font-semibold text-[#1B4965]">
            {title}
          </h2>

          <div className="w-48 h-[2px] bg-[#1B4965] mx-auto mt-3 mb-10 opacity-40 rounded-full"></div>

          <div className="grid grid-cols-3 gap-12 justify-center items-center text-center">
            {activitiesData.map((item, index) => (
              <div key={index} className="">

                {/* Handle icon types */}
             {/* Handle icon types */}
{typeof item.icon === "string" ? (
  <div className="bg-black rounded-full w-16 h-16 flex justify-center items-center mx-auto overflow-hidden">
    <Image
      src={item.icon}
      width={40}
      height={40}
      alt={item.title}
      className=""
    />
  </div>
) : (
  <div className="text-4xl text-[#3FA9F5] border-2 border-[#3FA9F5] rounded-full w-16 h-16 flex justify-center items-center mx-auto">
    {item.icon}
  </div>
)}


                <h3 className="text-lg font-semibold text-[#1B4965] mt-4">
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
