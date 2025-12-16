"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export const HeroSection = () => {
  const router = useRouter();

  const slides = [
    {
      id: 1,
      title: "GOA",
      price: "₹20,000",
      duration: "4N/5D",
      image: "/img/goa.jpg",
    },
    {
      id: 2,
      title: "KASHMIR",
      price: "₹25,000",
      duration: "5N/6D",
      image: "/img/kashmirimg.png",
    },
    {
      id: 3,
      title: "Himachal",
      price: "₹30,000",
      duration: "5N/6D",
      image: "/img/manali.jpg",
    },
    {
      id: 4,
      title: "RAJASTHAN",
      price: "₹25,000",
      duration: "4N/5D",
      image: "/img/rajasthan.png",
    },
        {
      id: 5,
      title: "Singapore ",
      price: "₹50,000",
      duration: "4N/5D",
      image: "https://images.unsplash.com/photo-1624003974266-7cdbf877ec00?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    //     {
    //   id: 6,
    //   title: "Thailand ",
    //   price: "₹30,000",
    //   duration: "7N/6D",
    //   image: "/img/rajasthan.png",
    // },
    //    {
    //   id: 7,
    //   title: "Sril Lanka",
    //   price: "₹28,500",
    //   duration: "7N/6D",
    //   image: "/img/rajasthan.png",
    // },
    //    {
    //   id: 8,
    //   title: "Nepal ",
    //   price: "₹ 24,800",
    //   duration: "7N/6D",
    //   image: "/img/rajasthan.png",
    // },
    //    {
    //   id: 9,
    //   title: "Bhutan",
    //   price: "₹27,000",
    //   duration: "7N/6D",
    //   image: "/img/rajasthan.png",
    // },
    //    {
    //   id: 10,
    //   title: "Japan ",
    //   price: "₹2,00,000",
    //   duration: "7N/6D",
    //   image: "/img/rajasthan.png",
    // },
    //    {
    //   id: 11,
    //   title: "Andaman ",
    //   price: "₹22,000",
    //   duration: "7N/6D",
    //   image: "/img/rajasthan.png",
    // },
    //    {
    //   id: 12,
    //   title: "Europe ",
    //   price: "₹1,50,000",
    //   duration: "7N/6D",
    //   image: "/img/rajasthan.png",
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
      <Image
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        fill
        priority
        className="object-cover transition-all duration-700 ease-in-out"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex justify-between items-center px-5 sm:px-10 text-white flex-col sm:flex-row gap-4 sm:gap-0 pt-10 sm:pt-0">
        {/* Left Section */}
        <div className="text-center sm:text-left">
          <div className="w-12 sm:w-14 h-1 bg-white rounded-xl mb-4 sm:mb-8 mx-auto sm:mx-0"></div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
            {slides[currentIndex].title}
          </h1>

          <div className="text-sm font-light mb-6 text-[#DCDCDC]">
            Starting From <br />
            <span className="text-lg sm:text-xl font-semibold text-white">
              {slides[currentIndex].price}
            </span>{" "}
            <span className="text-lg sm:text-xl font-semibold text-white">
              {slides[currentIndex].duration}
            </span>
          </div>

          <button
            onClick={() => router.push("/all-packages")}
            className="flex items-center justify-center sm:justify-start gap-3 bg-[#3FA9F5] px-6 py-2 rounded-full hover:bg-[#357ca8] transition mx-auto sm:mx-0"
          >
            Explore
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black">
              <FaArrowRightLong />
            </div>
          </button>
        </div>

        {/* Thumbnails (Desktop Only) */}
        <div className="hidden sm:flex gap-4">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-40 h-60 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ${
                index === currentIndex
                  ? "scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Bottom Center */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          className="border border-white text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
        >
          <MdKeyboardArrowLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          className="border border-white text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
        >
          <MdKeyboardArrowRight size={22} />
        </button>
      </div>
    </div>
  );
};
