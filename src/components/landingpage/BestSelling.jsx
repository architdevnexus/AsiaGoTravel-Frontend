import React from "react";
import { SwiperDestination } from "./BestSellingDestinationSwiper";

export const BestDestinationComponent = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-2 mb-6">
        <h1 className="font-bold text-3xl">Best Selling Destinations</h1>
        <span className="text-[#848484] text-sm">
          “Explore our most popular travel packages”
        </span>
      </div>

      <SwiperDestination />
    </section>
  );
};
