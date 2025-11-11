"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";

export const SwiperDestination = () => {
  const swiperRef = useRef(null);

  const images = [
    "/img/aboutimg1.jpg",
    "/img/aboutimg2.jpg",
    "/img/aboutimg3.jpg",
    "/img/aboutimg1.jpg",
    "/img/aboutimg2.jpg",
    "/img/aboutimg3.jpg",
    "/img/aboutimg1.jpg",
    "/img/aboutimg2.jpg",
    "/img/aboutimg3.jpg",
  ];

  return (
    <div className="relative w-full">
      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={5.5}
        spaceBetween={25}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper pb-10"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-60 rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Destination ${index + 1}`}
                width={400}
                height={420}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right blur overlay */}
      <div className="absolute right-0 top-0 h-60 w-28 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

      {/* Right Arrow Button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-1 top-[130px] -translate-y-1/2 z-20 transition "
      >
        <IoIosArrowForward  className="text-white" size={32} />
      </button>

      {/* Pagination styling */}
      <style jsx global>{`
        .mySwiper .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 20px !important;
        }
      `}</style>
    </div>
  );
};
