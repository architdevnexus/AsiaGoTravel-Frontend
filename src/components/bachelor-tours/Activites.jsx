import Image from "next/image";
import React from "react";

export const Activites = ({ title, activitiesData }) => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <Image
        src="/img/ActivityBg.png"
        width={1920}
        height={1080}
        alt="activities background"
        className="
          w-full 
          h-[855px]     /* Mobile first - smallest height */
          sm:h-[980px]  /* Small tablets */
          md:h-[800px]  /* Tablets */
          lg:h-[650px]  /* Desktop - your original height */
          object-cover
        "
      />

      <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-6">
        <div
          className="
            bg-white 
            w-full          /* Full width on mobile */
            max-w-[85%]     /* Constrained width on larger screens */
            rounded-3xl 
            shadow-2xl 
            p-4             /* Mobile first */
            sm:p-6
            md:p-8
            lg:p-10
            xl:p-12         /* Your original desktop padding */
            relative
          "
        >
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-[#1B4965]">
            {title}
          </h2>

          <div className="
            w-32 
            sm:w-40 
            md:w-48 
            h-[2px] 
            bg-[#1B4965] 
            mx-auto 
            mt-3 
            mb-6 
            sm:mb-8 
            md:mb-10 
            opacity-40 
            rounded-full
          "></div>

          {/* Responsive Grid */}
          <div
            className="
              grid 
              grid-cols-2         /* Mobile */
              sm:grid-cols-3      /* Small tablets */
              md:grid-cols-2      /* Tablets */
              lg:grid-cols-3      /* Desktop - your original 3 columns */
              gap-6               /* Mobile gap */
              sm:gap-8
              md:gap-10
              lg:gap-12           /* Your original gap */
              justify-center 
              items-center 
              text-center
            "
          >
            {activitiesData.map((item, index) => (
              <div key={index}>
                {/* ICON */}
                {typeof item.icon === "string" ? (
                  <div className="
                    bg-black 
                    rounded-full 
                    w-14 h-14      /* Mobile */
                    sm:w-14 sm:h-14
                    md:w-16 md:h-16 /* Desktop - your original size */
                    flex 
                    justify-center 
                    items-center 
                    mx-auto 
                    overflow-hidden
                  ">
                    <Image
                      src={item.icon}
                      width={32}
                      height={32}
                      alt={item.title}
                      className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    />
                  </div>
                ) : (
                  <div className="
                    text-3xl 
                    sm:text-3xl
                    md:text-4xl     /* Desktop - your original size */
                    text-[#3FA9F5] 
                    border-2 
                    border-[#3FA9F5] 
                    rounded-full 
                    w-14 h-14      /* Mobile */
                    sm:w-14 sm:h-14
                    md:w-16 md:h-16 /* Desktop - your original size */
                    flex 
                    justify-center 
                    items-center 
                    mx-auto
                  ">
                    {item.icon}
                  </div>
                )}

                {/* TITLE */}
                <h3 className="
                  text-base 
                  sm:text-lg 
                  md:text-lg 
                  font-semibold 
                  text-[#1B4965] 
                  mt-3 
                  sm:mt-4
                ">
                  {item.title}
                </h3>

                {/* POINTS */}
                <ul className="
                  mt-2 
                  text-gray-600 
                  text-xs        /* Smaller on mobile */
                  sm:text-sm     /* Desktop - your original size */
                  leading-relaxed
                ">
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