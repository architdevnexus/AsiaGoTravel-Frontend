"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoLocationOutline } from "react-icons/io5";

export const SwiperDestination = () => {
  const swiperRef = useRef(null);

  const destinations = [
    { src: "/img/aboutimg1.jpg", name: "Kashmir" },
    { src: "/img/aboutimg2.jpg", name: "Bangalore" },
    { src: "/img/aboutimg3.jpg", name: "Goa" },
    { src: "/img/aboutimg1.jpg", name: "Manali" },
    { src: "/img/aboutimg2.jpg", name: "Jaipur" },
    { src: "/img/aboutimg3.jpg", name: "Leh Ladakh" },
  ];

  return (
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={5.5} // ✅ Desktop same
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper pb-10"
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 14 },     // ✅ Mobile look like screenshot
          480: { slidesPerView: 2.2, spaceBetween: 14 },   // Small devices
          768: { slidesPerView: 3.2, spaceBetween: 18 },   // Tablets
          1024: { slidesPerView: 5.5, spaceBetween: 20 },  // ✅ Desktop unchanged
        }}
      >
        {destinations.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-65 rounded-xl overflow-hidden shadow-md">
              <Image
                src={item.src}
                alt={item.name}
                width={400}
                height={450}
                className="object-cover w-full h-full"
              />

              {/* TITLE LABEL */}
              <div className="absolute top-2 left-2  text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <IoLocationOutline size={14} />
                {item.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination styling */}
      <style jsx global>{`
        .mySwiper .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 12px !important;
        }
        .swiper-pagination-bullet {
          background: #d2d2d2;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          background: #1b4965 !important;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};
