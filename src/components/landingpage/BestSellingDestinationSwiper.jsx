"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const SwiperDestination = () => {
  const swiperRef = useRef(null);

  const destinations = [
    { src: "https://plus.unsplash.com/premium_photo-1697730426664-f04d9916f700?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Bhutan" },
    { src: "https://plus.unsplash.com/premium_photo-1697729603226-8c8627dfc12b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Char Dham" },
    { src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Goa" },
    { src: "https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=901&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Himachal" },
    { src: "https://images.unsplash.com/photo-1571957493901-4cc77844597b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "South Africa" },
    { src: "https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Thailand" },
    { src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Europe" },

  ];


  return (
    <div className="relative w-full">

      {/* LEFT Arrow */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-3 z-20 -translate-y-1/2 text-white   transition hidden md:flex"
      >
        <ChevronLeft size={30}  />
      </button>

      {/* RIGHT Arrow */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 right-2 z-20 -translate-y-1/2 text-white  transition hidden md:flex"
      >
        <ChevronRight size={30} />
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={5.5}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper pb-10"
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 14 },
          480: { slidesPerView: 2.2, spaceBetween: 14 },
          768: { slidesPerView: 3.2, spaceBetween: 18 },
          1024: { slidesPerView: 5.5, spaceBetween: 20 },
        }}
      >
        {destinations.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-65 rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={400}
                  height={450}
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                />

                <div className="absolute top-2 left-2 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1 bg-black/40 backdrop-blur-sm">
                  <IoLocationOutline size={14} />
                  {item.name}
                </div>
              </div>
            </motion.div>
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
          opacity: 1;
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
