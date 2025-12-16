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

export const AboutPackage = ({
  title = "Honeymoon Trips",
  description = "",
  images = [],
}) => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !images.length) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
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

    return () => trigger.kill();
  }, [images]);

  return (
    <section
      ref={sectionRef}
      className="w-full flex items-center justify-center bg-white"
    >
      <div
        className="
          w-[90%] flex justify-center items-center gap-10
          lg:flex-row md:flex-row flex-col
        "
      >
        {/* LEFT TEXT */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl mb-6 md:mb-8">
            {title}
          </h1>

          <p className="text-sm md:text-base leading-7 md:leading-8">
            {description}
          </p>
        </div>

        {/* RIGHT IMAGE SWIPER */}
        <div className="w-full md:w-[45%]">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            allowTouchMove={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="rounded-2xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  width={1200}
                  height={800}
                  alt={`${title} ${index + 1}`}
                  className="
                    w-full
                    h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]
                    object-cover rounded-2xl
                  "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
