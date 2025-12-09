    import React from "react";

    export const HeroBannerTours = ({title,description }) => {
    return (
        <section className="relative w-full flex justify-center">
        {/* BACKGROUND BLOCK */}
        <div className="bg-[#1B4965] w-[80%] h-[200px] rounded-xl p-2 relative">
        </div>

        {/* WHITE FRONT BLOCK */}
        <div className="absolute flex flex-col justify-center items-center py-12 top-[80px] w-[70%] text-[#1B4965] bg-white rounded-xl shadow-md z-[10]">
            {/* Add your content here */}
            <h2 className="text-3xl font-semibold mb-2  ">{title}</h2>
            <p>
            {description} </p>
        </div>
        </section>
    );
    };
