import React from "react";

export const HeroBannerTours = ({ title, description }) => {
    return (
        <section className="relative w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-10">
            {/* BACKGROUND BLOCK */}
            <div className="
        bg-[#1B4965] 
        w-full 
        max-w-[95%] 
        sm:max-w-[90%] 
        md:max-w-[90%] 
        lg:max-w-[80%] 
        h-[120px] 
        sm:h-[140px] 
        md:h-40 
        lg:h-[180px] 
        xl:h-[200px] 
        rounded-lg 
        sm:rounded-xl 
        p-2 
        relative
      ">
            </div>

            {/* WHITE FRONT BLOCK */}
            <div className="
        absolute 
        flex 
        flex-col 
        justify-center 
        items-center 
        py-4 
        sm:py-6 
        md:py-8 
        lg:py-10 
        xl:py-12 
        top-10 
        sm:top-[50px] 
        md:top-[60px] 
        lg:top-[70px] 
        xl:top-20 
        w-[90%] 
        sm:w-[65%] 
        md:w-[80%] 
        lg:w-[75%] 
        xl:w-[70%] 
        text-[#1B4965] 
        bg-white 
        rounded-lg 
        sm:rounded-xl 
        shadow-md 
        sm:shadow-lg 
        z-10 
        px-4 
        sm:px-5 
        md:px-6 
        lg:px-8 
        xl:px-10
      ">
                {/* TITLE */}
                <h2 className="
          text-lg 
          sm:text-xl 
          md:text-2xl 
          lg:text-2xl 
          xl:text-3xl 
          font-semibold 
          mb-1 
          sm:mb-1.5 
          md:mb-2 
          text-center
        ">
                    {title}
                </h2>

                {/* DESCRIPTION */}
                <p className="
          text-xs 
          sm:text-sm 
          md:text-base 
          lg:text-base 
          xl:text-base 
          text-center 
          text-gray-700 
          leading-relaxed 
          sm:leading-relaxed 
          md:leading-relaxed
        ">
                    {description}
                </p>
            </div>
        </section>
    );
};