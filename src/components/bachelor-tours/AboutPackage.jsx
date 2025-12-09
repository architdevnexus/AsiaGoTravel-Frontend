"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutPackage = () => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1509721926668-25a8dd274c1b?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1470&auto=format&fit=crop",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: true,

      onUpdate: (self) => {
        const swiper = swiperRef.current;
        if (swiper) {
          const progress = self.progress * (images.length - 1);
          swiper.slideTo(Math.round(progress));
        }
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full  flex items-center justify-center bg-white">
      <div className="flex justify-center items-center gap-10 w-[90%]">
        
        {/* LEFT TEXT */}
        <div className="w-[45%] text-center">
          <h1 className="font-bold text-3xl mb-8">About HoneyMoon</h1>
          <p className="text-sm leading-8">
          fjA honeymoon is more than just a holiday—it’s the first chapter of your life together.
           Honeymoon packages are designed to give newlyweds a perfect mix of romance, comfort, and
            unforgettable experiences. Whether you dream of relaxing on a beach, exploring mountains, or enjoying luxury stays,
             these packages make your trip stress-free and special.
          </p>
        </div>

        {/* RIGHT IMAGE SCROLL CONTROL SWIPER */}
        <div className="w-[45%]">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            allowTouchMove={false} // Disable manual swipe, scroll will control it
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="rounded-2xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  width={1200}
                  height={600}
                  alt={`Slide ${index}`}
                  className="w-full h-[350px] object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
